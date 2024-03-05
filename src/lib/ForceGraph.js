import * as THREE from 'three'
import SpriteText from 'three-spritetext'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/Addons.js';

export class ForceGraph {
  #thumbnails = new Set()
  #highlightNodes = new Set()
  #selectedNode = null

  constructor(updateBreadcrumbCallback) {
    this.updateBreadcrumbCallback = updateBreadcrumbCallback
  }

  async initialize() {
    const ForceGraph3D = await import('3d-force-graph')
    
    this.graph = ForceGraph3D.default({
      controlType: 'orbit',
      extraRenderers: [new CSS3DRenderer()]
    })
      .dagMode('radialout')
      .dagLevelDistance(10)
      .nodeRelSize(1)
      .nodeId('data')
      .linkOpacity(0.1)
      .linkWidth(0.1)
      .backgroundColor('aliceblue')
      .enableNodeDrag(false)
      .linkDirectionalParticles(10)
      .linkDirectionalParticleWidth(0.2)
      .linkDirectionalParticleSpeed(0.002)
      .linkDirectionalParticleResolution(1)
      .linkColor(link => this.#highlightNodes.has(link.source) ? "green" : "red")
      .linkDirectionalParticleColor(() => '#AA3922')
      .cooldownTicks(160)
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
      // .nodeThreeObjectExtend(true)
  }

  attach(container, w, h) {
    if (this.graph) {
      this.graph(container)
      this.graph.d3Force('charge').strength(-500)
      this.graph.cameraPosition({x: 0, y: 0, z: 0})
      
      this.scene = this.graph.scene()
      this.renderer = this.graph.renderer()
      this.controls = this.graph.controls()
      this.camera = this.controls.object 
      
      this.controls.rotateSpeed = -1
      this.camera.setFocalLength(10)
      
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
    }
  }

  getWorksList() {
    const worksSet = this.#selectedNode.ancestors().reduce(ForceGraph.reducer, new Set())
    return Array.from(worksSet)
  }

  static reducer(acc, curr) {
    if (curr.children) {
      curr.children.reduce(ForceGraph.reducer, acc)
    } else if (!acc.has(curr)) {
      acc.add(curr)
    }

    return acc
  }

  focusNode(node) {
    if ((!node && !this.#highlightNodes) || (node && this.#selectedNode === node)) return

    this.clearFocus()
    this.#selectedNode = this.root.find(d => d === node)
    this.#highlightNodes.add(this.#selectedNode)
    this.#selectedNode.descendants().forEach(node => this.#highlightNodes.add(node))
   
    this.updateBreadcrumb()
    this.updateHighlight()
    this.rotateToSelected()
  }

  updateBreadcrumb() {
    const breadcrumb = this.root.path(this.#selectedNode)
      .map((node) => node.data[0] || node.data.title)
      .join('/')
      .replace(/\s+/g, '_')
      .toLowerCase()
    this.updateBreadcrumbCallback(breadcrumb)
  }

  clearFocus() {
    this.#selectedNode = null
    this.#highlightNodes.clear()
    this.updateHighlight()
  }

  updateHighlight() {
    this.graph
      .nodeThreeObject(this.graph.nodeThreeObject())
      .linkColor(this.graph.linkColor())
  }

  rotateToSelected() {
    const selected = this.#selectedNode
    const distance = -30
    const distRatio = distance/Math.hypot(selected.x, selected.y, selected.z);
    
    const fov = selected.depth * 18
 
    
    const newPosition =  { x: selected.x * distRatio, y: selected.y * distRatio, z: selected.z * distRatio }
    
    this.graph.cameraPosition(
      newPosition, 
      this.graph.scene.position,
      1000  
    )

    this.camera.setFocalLength(fov)
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
    sprite.color = highlight ? 'green' :  'transparent'
    sprite.textHeight = 4
    
    return sprite
  }
}