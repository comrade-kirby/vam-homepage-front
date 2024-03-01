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
      .dagLevelDistance(100)
      .nodeRelSize(1)
      .nodeId('data')
      .linkOpacity(1)
      .linkWidth(1)
      .enableNodeDrag(false)
      .linkDirectionalParticles(50)
      .linkDirectionalParticleWidth(0.4)
      .linkDirectionalParticleSpeed(0.0002)
      .linkDirectionalParticleResolution(1)
      .linkColor(link => this.#highlightNodes.has(link.source) ? "green" : "red")
      .linkDirectionalParticleColor(() => '#AA3922')
      .cooldownTicks(60)
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
      this.graph.d3Force('charge').strength(-1000)

      const scene = this.graph.scene()
      const renderer = this.graph.renderer()
      
      this.setSize(w, h)

      renderer.setAnimationLoop(() => {
        this.#thumbnails.forEach(thumbnail => {
          thumbnail.lookAt(scene.position)
        })
      })
    }
  }

  setSize(w, h) {
    if (this.graph) {
      const renderer = this.graph.renderer()
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(w , h)
    }
  }

  updateWorks(root) {
    this.root = root

    this.root.eachAfter(async d => {
      // let testId = '854513335'
      if (d.data.videoId) {
        const response = await fetch(`/api/thumbnail/${d.data.videoId}`)
        const thumbnails = await response.json()

        d.data.animatedThumbnails = thumbnails
      }
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
    const distance = 100 * (selected.height + 1);
    const distRatio = 1 + distance/Math.hypot(selected.x, selected.y, selected.z);
  
    const newPos = selected.x || selected.y || selected.z
      ? { x: selected.x * distRatio, y: selected.y * distRatio, z: selected.z * distRatio }
      : { x: 0, y: 0, z: distance }; // special case if selected is in (0,0,0)
  
    this.graph.cameraPosition(
      newPos, 
      this.graph.scene.position,
      500  
    );
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

    const text = node.data.data
      ? node.data.data.title
      : node.data[0]

    const sprite = new SpriteText(text)
    sprite.material.depthWrite = false // make sprite background transparent
    sprite.color = highlight ? 'green' :  '#AA3922'
    sprite.textHeight = 4

    return sprite
  }
}