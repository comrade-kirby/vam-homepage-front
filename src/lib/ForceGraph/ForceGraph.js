import * as THREE from 'three'
import Player from '@vimeo/player'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/Addons.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import SpriteText from 'three-spritetext'
import { goto } from '$app/navigation'
import { forceCollide } from 'd3-force'
import { backOut, expoInOut } from "svelte/easing"

import { 
  cameraTarget,
  cameraZoom,
  selectedPaused,
  selectedVideoPlayer,
  selectedVolume,
  loadingLog
} from '$lib/stores'


export class ForceGraph {
  #volume = 0
  #thumbnails = new Set()
  #highlightNodes = new Set()
  #clock = new THREE.Clock();
  #ocean
  #mixer
  #selectedNode = null
  #selectNeedsUpdate = false
  #cameraNeedsUpdate = false
  #cameraTargetCoordinates = null
  #initialCooldown = true
  #bloomMaterial = new THREE.MeshStandardMaterial({
    toneMapped: false,
    emissive: "#F6993C",
    emissiveIntensity: 10
  })
  #defaultMaterial = new THREE.MeshStandardMaterial({
    toneMapped: false,
    emissive: "#F6993C",
    emissiveIntensity: 3
  })
  #transparentMaterial = new THREE.MeshLambertMaterial({
    transparent: true,
    opacity: 0
  })
  
  constructor(ForceGraphConstructor) {
    this.ForceGraphConstructor = ForceGraphConstructor
  }

  initialize(onEngineStopCallback) {
    loadingLog.start('force-graph-initialize')

    this.graph = this.ForceGraphConstructor.default({
      controlType: 'orbit',
      extraRenderers: [new CSS3DRenderer()]
    })
      .dagMode('radialout')
      .nodeRelSize(10)
      .nodeVal(node => node.depth)
      .nodeId('data')
      .backgroundColor('rgba(0, 0, 0, 0)')
      .showNavInfo(false)
      .enableNodeDrag(false)
      .nodeVisibility((node) => node.depth > 0)
      .linkMaterial(link => {
        if (link.source.depth === 0) return this.#transparentMaterial
        return this.#highlightNodes.has(link.source) 
          ? this.#bloomMaterial
          : this.#defaultMaterial
      })
      .onNodeClick((node) => {
        if (node.depth === 0) return
        const nodeData =  node.data[0] || node.data
        goto(nodeData.slug)
      })
      // .warmupTicks(1000)
      // .cooldownTicks(0)
      .onEngineStop(() => {
        loadingLog.complete('engine')

        if (this.#initialCooldown) {
          this.#selectNeedsUpdate = true
          onEngineStopCallback()
          this.#initialCooldown = false
        }
      })
      .nodeThreeObject((node) => {
        // prevent reloading of videos on highlight update
        if (node.data.oembedData) {
            const thumbnail = this.#video2DNode(node)
            return thumbnail
        } else {
          return this.#textNode(node)
        }
      })
      .nodeThreeObjectExtend(d => d.height === 0)

    loadingLog.complete('force-graph-initialize')

      // .nodeThreeObjectExtend(d => d.height === 0 ? true : false)
  }

  loadOcean = (scene) => {
    loadingLog.start('load-wave')

    const loader = new GLTFLoader();

    loader.load( '/ocean/scene.gltf', ( gltf ) => {
      this.#mixer = new THREE.AnimationMixer(gltf.scene);
      this.#mixer.timeScale = 0.1
      this.#mixer.clipAction(gltf.animations[0]).play(); 

      this.#ocean = gltf.scene
      this.#ocean.traverse( (object)=> {
        if (object.isMesh) {
          object.material.opacity = 0.2
          object.material.color = new THREE.Color( 0xF7FDFF );
          object.material.wireframe = true
        }
      })

      scene.add(this.#ocean);
      this.#ocean.scale.set(200, 200, 200)
      loadingLog.complete('load-wave')

    }, 
    undefined, 
    ( error ) => {
      console.error( error );
    } );
  }

  attach(container, w, h) {
    loadingLog.start('force-graph-attach')

    if (this.graph) {
      this.graph(container)
      
      this.graph.d3Force('collide', forceCollide(d => d.height === 0 ? this.graph.nodeRelSize() : 0))
      this.graph.d3Force('charge').strength(-1000).distanceMin(100)
      this.graph.cameraPosition({x: 0, y: 0, z: 0})
      
      this.scene = this.graph.scene()
      
      // this.scene.add(new THREE.DirectionalLight( 0xffffff, 3 ))
      
      this.controls = this.graph.controls()
      this.controls.rotateSpeed = -1
      this.controls.enablePan = false
      this.controls.enableZoom = false
      this.camera = this.graph.camera()
      this.loadOcean(this.scene)
      this.cameraControls = this.controls.object 
      this.renderer = this.graph.renderer()
      this.renderer.outputEncoding = THREE.sRGBEncoding
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping

      const renderTarget = new THREE.WebGLRenderTarget(w, h, {
        type: THREE.HalfFloatType,
        format: THREE.RGBAFormat,
        encoding: THREE.sRGBEncoding,
      })
      renderTarget.samples = 8
      const renderScene = new RenderPass(this.scene, this.camera)
      const bloomPass = new UnrealBloomPass(undefined, 1, 1, 1)
      const bloomComposer = new EffectComposer( this.renderer );
			bloomComposer.addPass( renderScene );
      const bokehPass = new BokehPass( this.scene, this.camera, {
        focus: 900,
        aperture: 0.00001,
        maxblur: 0.001
      } );
      bokehPass.needsSwap = true;

      bloomComposer.addPass( bloomPass );
      bloomComposer.addPass(bokehPass)

      const outputPass = new OutputPass()
      bloomComposer.addPass(outputPass)
      
      this.renderer.setAnimationLoop(() => {
        if (this.#ocean) {

          const zoom = this.cameraControls.zoom
          this.#ocean.position.copy( this.camera.position );
          this.#ocean.rotation.copy( this.camera.rotation );
          this.#ocean.translateZ((zoom * -200) -500)
          this.#ocean.translateY((-25 / zoom) - 25 );
          this.#ocean.updateMatrix();
          
        }
        if (this.#mixer) {
          this.#mixer.update(this.#clock.getDelta());
        }

        bloomComposer.render()
        this.#updateCamera()
        this.#thumbnails.forEach(thumbnail => {
          thumbnail.lookAt(scene.position)
        })
      })
      
      this.setSize(w, h)
    }

    loadingLog.complete('force-graph-attach')
  }

  playSelected = () => {
    this.#getSelectedVideoPlayer().play()
    this.#updatePauseState()
  }

  pauseSelected = () => {
    this.#getSelectedVideoPlayer().pause()
    this.#updatePauseState()
  }

  mute = () => {
    this.#volume = 0
    this.#getSelectedVideoPlayer().setVolume(this.#volume)
    this.#updateVolumeLevel()
  }

  unMute = () => {
    this.#volume = 1
    this.#getSelectedVideoPlayer().setVolume(this.#volume)
    this.#updateVolumeLevel()
  }

  openFullscreen = () => {
    const player = this.#getSelectedVideoPlayer()
    player.requestFullscreen()
  }

  #getSelectedVideoPlayer = () => this.#selectedNode.videoPlayer

  #updatePauseState = () => {
    this.#getSelectedVideoPlayer()?.getPaused()
      .then(state => selectedPaused.set(state))
  }
  
  #updateVolumeLevel = () => {
    this.#getSelectedVideoPlayer()?.getVolume()
      .then(state => selectedVolume.set(state))
  }

  updateWorks(root) {
    loadingLog.start('add-works')

    if (this.graph) {
      this.graph.graphData({
        nodes: root.descendants(),
        links: root.links()
      })
      
      loadingLog.complete('add-works')
      return true
    } else { 
      return false
    }
  }

  setZoom(zoom) {
    this.cameraControls.zoom = zoom
    this.cameraControls.updateProjectionMatrix()
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

  select(node) {
    const isNewNode = this.#selectedNode !== node
    
    if (node && this.graph && (isNewNode || this.#selectNeedsUpdate)) {
      this.#selectNeedsUpdate = false
      this.#pauseHighlighted()
      this.#clearFocus()
      
      this.#selectedNode = node
      
      this.#highlightNodes.add(this.#selectedNode)
      this.#selectedNode.descendants().forEach(node => this.#highlightNodes.add(node))

      const selectedPlayer = this.#selectedNode.videoPlayer
      selectedPlayer?.play()
      selectedPlayer?.setVolume(this.#volume)
      const {x, y, z} = this.#selectedNode

      this.#playHighlighted()
      this.#updateHighlight()
      
      if (x && y && z) {
        cameraTarget.set([this.#selectedNode.x, this.#selectedNode.y, this.#selectedNode.z])
      }

      cameraZoom.setZoomByIndex(this.#selectedNode.depth + 1)

      selectedVideoPlayer.set(this.#getSelectedVideoPlayer())
      this.#updatePauseState()
      this.#updateVolumeLevel()
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
    
      const distance = -1
      const distRatio = distance/Math.hypot(cameraTarget.x, cameraTarget.y, cameraTarget.z);
      const cameraPosition = cameraTarget.multiplyScalar(distRatio)
      
      this.graph.cameraPosition(cameraPosition, this.scene.position)
      this.#cameraNeedsUpdate = false
    }
  }

  onNavHover(slug) {
    const target = this.graph.graphData().nodes.find(d => {
      const nodeData = d.data[0] || d.data
      return nodeData.slug === slug
    })
    if (!this.#selectedNode || !target) return 

    const selected = this.#selectedNode
    const selectedPosition = new THREE.Vector3(selected.x, selected.y, selected.z)
    const targetPosition = new THREE.Vector3(target.x, target.y, target.z)
    const direction = new THREE.Vector3().subVectors(selectedPosition, targetPosition)
    const newTarget = selectedPosition.addScaledVector(direction, 0.05)
    cameraTarget.set(newTarget.toArray(), { duration: 2000, easing: expoInOut })
  }

  cancelNavHover() {
    const selected = this.#selectedNode

    if (selected) {
      const selectedPosition = new THREE.Vector3(selected.x, selected.y, selected.z)
      cameraTarget.set(selectedPosition.toArray(), { duration: 400, easing: backOut })
    }
  }

  onWheel(event) {
    const dy = event.deltaY
    if (dy === 0) return 
    dy > 0 ? cameraZoom.zoomOut() : cameraZoom.zoomIn()
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
    // this.#highlightNodes.forEach(node => {
    //   if (node.videoPlayer) {
    //     node.videoPlayer.play().then(() => {
    //       if (node === this.#selectedNode) {
    //         this.#updatePauseState()
    //         this.#updateVolumeLevel()
    //       }
    //     })
    //   }
    // })
  }

  #clearFocus() {
    this.#selectedNode = null
    this.#highlightNodes.clear()

    if (this.graph) {
      this.#updateHighlight()
    }
  }

  #updateHighlight() {
    this.graph.linkMaterial(this.graph.linkMaterial())
  }

  #video2DNode(node) {
    const container = document.createElement('div')
    container.setAttribute('class', 'mycontainer')
    loadingLog.start('load-videos', node.data.videoId)

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
      controls: false,
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

    const label = document.createElement('h1')
    label.innerHTML = `${node.data.attributes.client.data.attributes.name}  |  ${node.data.attributes.title}`
    container.style.padding = '10px'
    
    container.append(label)
    node.videoPlayer.on('loaded', () => loadingLog.complete('load-videos', node.data.videoId))
    node.videoPlayer.on('error', (err) => console.log(err))
    node.videoPlayer.on('play', () => {
      // TODO: fix no clickable nodes
      if (this.#highlightNodes.has(node)) {
        this.console.log('already focused')
      } else {
        goto(node.data.slug)
      }
    })

    // player.on('ended', () => focus and restart next if current focus)
    const videoNode = new CSS3DObject(node.videoPlayer.element)
    // add label to video
    videoNode.scale.set(0.1, 0.1, 0.1);
    this.#thumbnails.add(videoNode)
    return videoNode
  }
  
  #textNode(node) {
    let text = ""

    if (node.depth > 0) {
      text = node.data[0].name || node.data.name
    } 


    const sprite = new SpriteText(text)
  
    sprite.material.depthWrite = false // make sprite background transparent
    sprite.center = {x: -0.1, y: 0.5}
    sprite.padding = 2
    sprite.color = 'black'
    sprite.strokeWidth = '0.5'
    sprite.strokeColor = '#F6993C'
    sprite.opacity = 1
    sprite.textHeight = 1
    
    return sprite
  }
}