import * as THREE from 'three'
import { forceCollide } from 'd3-force';
import { mean } from 'd3-array'
import SpriteText from 'three-spritetext'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/Addons.js';
import { buildBreadcrumb } from './helpers';
export class ForceGraph {
  #thumbnails = new Set()
  #highlightNodes = new Set()
  #selectedNode = null
  #currentFocalLength = 18
  #maxFocalLength = 100
  #minFocalLength = 10
  
  constructor(updateBreadcrumbCallback) {
    this.updateBreadcrumbCallback = updateBreadcrumbCallback
    this.ready = false
  }

  async initialize() {
    const ForceGraph3D = await import('3d-force-graph')
    
    this.graph = ForceGraph3D.default({
      controlType: 'orbit',
      extraRenderers: [new CSS3DRenderer()]
    })
      .dagMode('radialout')
      .nodeRelSize(34)
      .nodeId('data')
      .linkOpacity(1)
      .linkWidth(0.1)
      .backgroundColor('rgba(0, 0, 0, 0)')
      .enableNodeDrag(false)
      .linkColor(link => this.#highlightNodes.has(link.source) ? "green" : "red")
      .onNodeClick((node) => this.focusNode(node))
      .nodeThreeObject((node) => {
        if (node.data.animatedThumbnails?.data.length) {
          let thumb = this.#animatedNode(node)
          this.#thumbnails.add(thumb)
          return thumb
        } else if (node.data.oembedData) {
          const thumbnail = this.#imageNode(node)
          this.#thumbnails.add(thumbnail)
          return thumbnail
        } else {
          return this.#textNode(node)
        }
      })
      // .nodeThreeObjectExtend(d => d.height === 0 ? true : false)
  }

  attach(container, w, h) {
    if (this.graph) {
      this.graph(container)
      this.graph.d3Force('collide', forceCollide(d => d.height === 0 ? this.graph.nodeRelSize() : 0))
      this.graph.d3Force('charge').strength(-1000).distanceMin(100)
      this.graph.cameraPosition({x: 0, y: -80, z: 0})
      this.scene = this.graph.scene()
      this.renderer = this.graph.renderer()
      this.controls = this.graph.controls()
      this.camera = this.controls.object 
      
      this.controls.rotateSpeed = -1
      this.controls.enablePan = false
      this.controls.enableZoom = false
      this.camera.setFocalLength(this.#currentFocalLength)
      
      this.setSize(w, h)

      this.renderer.setAnimationLoop(() => {
        this.#thumbnails.forEach(thumbnail => {
          thumbnail.lookAt(scene.position)
        })
      })
    }
  }

  setSize(w, h) {
    if (this.graph) {
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(w , h)
    }
  }

  updateWorks(root) {
    this.root = root

    this.root.eachAfter(async d => {
      // const provider = d.data.oembedData?.rawData.provider_name
      // console.log(provider)
      // if (provider === "YouTube") {
        // bypass cors block for image url
      // }
      // if (provider == "Vimeo" && d.data.videoId) {
      //   const response = await fetch(`/api/thumbnail/${d.data.videoId}`)
      //   const thumbnails = await response.json()

      //   d.data.animatedThumbnails = thumbnails
      // }
    })

    if (this.graph) {
      this.graph.graphData({
        nodes: this.root.descendants(),
        links: this.root.links()
      })

      return true
    } else { 
      return false
    }
  }

  

  focusNode(node) {
    if (this.#selectedNode !== node) {
      this.clearFocus()
      this.#selectedNode = node
      this.#highlightNodes.add(this.#selectedNode)
      this.#selectedNode.descendants().forEach(node => this.#highlightNodes.add(node))
      this.#updateBreadcrumb()
      this.#updateHighlight()
    }
   
    this.#rotateToSelected()
  }

  clearFocus() {
    this.#selectedNode = null
    this.#highlightNodes.clear()
    this.#updateHighlight()
  }

  onWheel(event) {
    const dy = event.deltaY
    if (dy === 0) return 
    
    dy > 0 
      ? this.#focalLengthDown()
      : this.#focalLengthUp() 
  }

  #focalLengthUp() {
    if (this.#currentFocalLength >= this.#maxFocalLength) return 
    this.#currentFocalLength++
    this.#updateFocalLength()
  }

  #focalLengthDown() {
    if (this.#currentFocalLength <= this.#minFocalLength) return 
    this.#currentFocalLength-- 
    this.#updateFocalLength()
  }

  #updateFocalLength() {
    this.camera.setFocalLength(this.#currentFocalLength)
  }

  #updateBreadcrumb() {
    const path = this.root.path(this.#selectedNode)
    const breadcrumb = buildBreadcrumb(path)
   
    this.updateBreadcrumbCallback(breadcrumb)
  }

  #updateHighlight() {
    this.graph
      .nodeThreeObject(this.graph.nodeThreeObject())
      .linkColor(this.graph.linkColor())
  }

  #rotateToSelected() {
    const selected = this.#selectedNode
    const descendants = selected.descendants()
    const distance = -100
    const distRatio = distance/Math.hypot(selected.x, selected.y, selected.z);
    const focalLength = selected.depth * 24
    
    const newPosition = {
      x: mean(descendants, d => d.x) * distRatio,
      y: mean(descendants, d => d.y) * distRatio,
      z: mean(descendants, d => d.z) * distRatio
    }
    
    this.graph.cameraPosition(newPosition, this.graph.scene.position, 1000)
    this.camera.setFocalLength(focalLength)
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
    sprite.color = 'green'
    // sprite.color = highlight ? 'green' :  'transparent'
    sprite.textHeight = 4
    
    return sprite
  }
}