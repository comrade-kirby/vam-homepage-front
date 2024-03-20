import * as THREE from 'three'
import { cameraTarget, cameraFocalLength } from '$lib/stores'
import { goto } from '$app/navigation'
import { forceCollide } from 'd3-force';
// import { mean } from 'd3-array'
import SpriteText from 'three-spritetext'
import Player from '@vimeo/player'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/Addons.js';

export class ForceGraph {
  #thumbnails = new Set()
  #highlightNodes = new Set()
  #selectedNode = null
  #selectNeedsupdate = false
  #cameraNeedsUpdate = false
  #cameraTargetCoordinates = null
  #focalLength = 18
  #maxFocalLength = 100
  #minFocalLength = 10
  #initialCooldown = true
  
  constructor(ForceGraphConstructor) {
    this.ForceGraphConstructor = ForceGraphConstructor
  }

  initialize(onEngineStopCallback) {
    this.graph = this.ForceGraphConstructor.default({
      controlType: 'orbit',
      extraRenderers: [new CSS3DRenderer()]
    })
      .dagMode('radialout')
      .nodeRelSize(34)
      .nodeId('data')
      .linkOpacity('0.5')
      // .linkOpacity(link => {
      //   console.
      //   return link.source.depth === 0 
      //     ? '0'
      //     : '1'
      //     // : this.#highlightNodes.has(link.source) ? "0.3" : "0.1"
      // })
      .linkWidth(0.1)
      .backgroundColor('rgba(0, 0, 0, 0)')
      .enableNodeDrag(false)
      .linkColor(link => {

        return link.source.depth === 0 
          ? 'transparent'
          : this.#highlightNodes.has(link.source) ? "#292E1E" : "#F6993C"
      })
      .onNodeClick((node) => goto(node.data.href))
      .warmupTicks(500)
      .cooldownTicks(100)
      .onEngineStop(() => {
        if (this.#initialCooldown) {
          this.#selectNeedsupdate = true
          onEngineStopCallback()
          this.#initialCooldown = false
        }
      })
      .nodeThreeObject((node) => {
        if (node.data.animatedThumbnails?.data.length) {
          let thumb = this.#animatedNode(node)
          this.#thumbnails.add(thumb)
          return thumb
        } else if (node.data.oembedData) {
          const thumbnail = this.#video2DNode(node)
          this.#thumbnails.add(thumbnail)
          return thumbnail
        } else {
          return this.#textNode(node)
        }
      })
      .nodeThreeObjectExtend(d => d.height === 0 ? true : false)
  }

  attach(container, w, h) {
    if (this.graph) {
      this.graph(container)
      
      this.graph.d3Force('collide', forceCollide(d => d.height === 0 ? this.graph.nodeRelSize() : 0))
      this.graph.d3Force('charge').strength(-1000).distanceMin(100)
      this.graph.cameraPosition({x: 0, y: 0, z: 0})
      
      this.scene = this.graph.scene()
      this.scene.add(new THREE.DirectionalLight( 0xffffff, 3 ))
      
      this.controls = this.graph.controls()
      this.controls.rotateSpeed = -1
      this.controls.enablePan = false
      this.controls.enableZoom = false
      
      this.camera = this.controls.object 
      
      this.renderer = this.graph.renderer()
      this.renderer.setAnimationLoop(() => {
        this.#updateCamera()
        this.#thumbnails.forEach(thumbnail => {
          thumbnail.lookAt(scene.position)
        })
      })
      
      this.setSize(w, h)
    }
  }

  setFocalLength(focalLength) {
    if (this.#focalLength !== focalLength) {
      this.#focalLength = focalLength
      this.#cameraNeedsUpdate = true
    }
  }

  setCameraTargetCoordinates(cameraTargetCoords) {

    if (this.#areNewCoordinates(cameraTargetCoords)) {
      this.#cameraTargetCoordinates = cameraTargetCoords
      this.#cameraNeedsUpdate = true
    }
  }

  setSize(w, h) {
    if (this.graph) {
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(w , h)
    }
  }

  updateWorks(root) {
    if (this.graph) {
      this.graph.graphData({
        nodes: root.descendants(),
        links: root.links()
      })
      
      return true
    } else { 
      return false
    }
  }

  select(node) {
    const isNewNode = this.#selectedNode !== node

    if (node && this.graph && (isNewNode || this.#selectNeedsupdate)) {
      this.#selectNeedsupdate = false
      this.#pauseHighlighted()
      this.#clearFocus()
      
      this.#selectedNode = node
      this.#highlightNodes.add(this.#selectedNode)
      this.#selectedNode.descendants().forEach(node => this.#highlightNodes.add(node))

      const {x, y, z} = this.#selectedNode

      this.#playHighlighted()
      this.#updateHighlight()
      if (x && y && z) {
        cameraTarget.set([this.#selectedNode.x, this.#selectedNode.y, this.#selectedNode.z])
      }
      cameraFocalLength.set(this.#selectedNode.depth * 24 || 18)
    }
  }

  #areNewCoordinates(newTarget) {
    const old = this.#cameraTargetCoordinates

    if (!old) return true
    if (old.includes(null)) return true
    if (newTarget === old) return false;
    if (newTarget == null) return false;
    if (newTarget.length !== old.length) return true;
    let allMatch = newTarget.reduce((acc, curr, index) => {
      if (!acc) return false
      if (curr !== old[index]) { return false }

      return true
    }, true)

    return !allMatch 
  }
  
  #updateCamera() {
    if (!this.#cameraTargetCoordinates) return
    if (this.#cameraNeedsUpdate) {
      const cameraTarget = new THREE.Vector3().fromArray(this.#cameraTargetCoordinates)
    
      const distance = -80
      const distRatio = distance/Math.hypot(cameraTarget.x, cameraTarget.y, cameraTarget.z);

      const cameraPosition = cameraTarget.multiplyScalar(distRatio)

      this.graph.cameraPosition(cameraPosition, this.scene.position)
      this.camera.setFocalLength(this.#focalLength)

      this.#cameraNeedsUpdate = false
    }
    
  }

  onNavHover(node) {
    // remove later and add nudge for no selected
    if (!this.#selectedNode) return 

    const selected = this.#selectedNode
    const selectedPosition = new THREE.Vector3(selected.x, selected.y, selected.z)
    const nodePosition = new THREE.Vector3(node.x, node.y, node.z)
    const direction = new THREE.Vector3().subVectors(selectedPosition, nodePosition)
    const newTarget = selectedPosition.addScaledVector(direction, -0.1)
    cameraTarget.set(newTarget.toArray())
  }

  cancelNavHover() {
    // remove later and add nudge for no selected
    if (!this.#selectedNode) return 
    
    const selected = this.#selectedNode

    if (selected) {

      const selectedPosition = new THREE.Vector3(selected.x, selected.y, selected.z)
      cameraTarget.set(selectedPosition.toArray())
    }
  }

  onWheel(event) {
    const dy = event.deltaY
    if (dy === 0) return 
    
    dy > 0 
      ? this.#focalLengthDown()
      : this.#focalLengthUp() 
  }

  #pauseHighlighted() {
    if (!this.#highlightNodes) return 

    this.#highlightNodes.forEach(node => {
      if (node.videoPlayer) {
        node.videoPlayer.pause()
      }
    })
  }

  #playHighlighted() {
    this.#highlightNodes.forEach(node => {
      if (node.videoPlayer) {
        node.videoPlayer.play()
      }
    })
  }

  #clearFocus() {
    this.#selectedNode = null
    this.#highlightNodes.clear()

    if (this.graph) {
      this.#updateHighlight()
    }
  }

  #focalLengthUp() {
    if (this.#focalLength >= this.#maxFocalLength) return 
    this.#focalLength++
    this.#updateFocalLength()
  }

  #focalLengthDown() {
    if (this.#focalLength <= this.#minFocalLength) return 
    this.#focalLength-- 
    this.#updateFocalLength()
  }

  #updateFocalLength() {
    this.camera.setFocalLength(this.#focalLength)
  }

  #updateHighlight() {
    this.graph
      // .nodeThreeObject(this.graph.nodeThreeObject())
      .linkColor(this.graph.linkColor())
      .linkOpacity(this.graph.linkOpacity())
  }

  #imageNode(node) {
    let thumbnail = node.data.oembedData.thumbnail
    const imgTexture = new THREE.TextureLoader().load(thumbnail)
    imgTexture.colorSpace = THREE.SRGBColorSpace
    const material = new THREE.MeshBasicMaterial({ map: imgTexture })
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(64, 36), material)
    plane.material.side = THREE.DoubleSide
  
    return plane
  }

  #animatedNode(node) {
    const animatedThumbnails = node.data.animatedThumbnails
    const hq = animatedThumbnails.data[0].sizes[2]
    const img = document.createElement('img')
    img.src = hq.link
    const thumbnail = new CSS3DObject(img)

    thumbnail.scale.set(0.1, 0.1, 0.1);
    
    return thumbnail
  }

  #video2DNode(node) {
    const container = document.createElement('div')
    container.setAttribute('class', 'mycontainer')
    node.videoPlayer = new Player(container, {
      id: node.data.videoId,
      // id will not work for unlisted videos.
      // will need to use video link url instead (url needs 'h' parameter)
      // url: 'https://player.vimeo.com/video/854513335?h=4341926ce1',
      portrait: false,
      quality_selector: false,
      title: false,
      transcript: false,
      vimeo_logo: false,
      chromecast: false,
      width: 720,
      byline: false,
      color: '9C5207',
      loop: true,
      progress_bar: false,
      airplay: false,
      speed: false,
      muted: true,
      pip: false
    })
    
    node.videoPlayer.on('play', () => {
      // seems a bit slow maybe an onclick callback
      if (this.#highlightNodes.has(node)) {
        this.console.log('already focused')
      } else {
        goto(node.data.href)
      }
    })

    // player.on('ended', () => focus and restart next if current focus)
    const videoNode = new CSS3DObject(node.videoPlayer.element)

    videoNode.scale.set(0.1, 0.1, 0.1);

    return videoNode
  }
  
  // unused + broken
  #video3DNode(node) {
    const videoUrl = "https://player.vimeo.com/progressive_redirect/playback/854513335/rendition/1080p/file.mp4?loc=external&log_user=0&signature=4403e3e0dea912f874f474ba766db92faea7546ad2a7eb0c1603bdc4c76dde8a"
    
    const video = document.createElement('video')
    video.setAttribute('width', '320')
    video.setAttribute('height', '320')
    video.setAttribute('src', videoUrl)
    
    const videoTexture = new THREE.VideoTexture( video )
    
    videoTexture.colorSpace = THREE.SRGBColorSpace
    videoTexture.format = THREE.RGBFormat;
    videoTexture.needsUpdate = true

    const parameters = {color: 0xffffff, map: videoTexture}
    const material = new THREE.MeshLambertMaterial( parameters );
    material.needsUpdate = true
    const geometry = new THREE.BoxGeometry( 36, 36, 36 );
    const mesh = new THREE.Mesh( geometry, material );
    
    return mesh
  }

  #textNode(node) {
    const highlight = this.#highlightNodes.has(node)
    let text = ""
    if (node.depth > 0) {
      text = node.data.data
      ? node.data.data.title
      : node.data[0]
    } 
    
    const sprite = new SpriteText(text)
    sprite.material.depthWrite = false // make sprite background transparent
    // sprite.color = ''
    sprite.color = highlight ? '#292E1E' :  '#9C5207'
    sprite.textHeight = 2
    
    return sprite
  }
}