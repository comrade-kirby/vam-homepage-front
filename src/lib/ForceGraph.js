import * as THREE from 'three'
import { PUBLIC_CMS_URL } from '$env/static/public'
import SpriteText from 'three-spritetext'

export class ForceGraph {
  #thumbnails = new Set()
  #highlightNodes = new Set()
  #selectedNode = null

  async initialize() {
    const ForceGraph3D = await import('3d-force-graph')
    
    this.graph = ForceGraph3D.default({controlType: 'orbit'})
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
        if (node.data.attributes) {
          const thumbnail = this.#imageNode(node)
          this.#thumbnails.add(thumbnail)
          return thumbnail
        } else {
          return this.#textNode(node)
        }
      })
  }

  attach(container) {
    if (this.graph) {
      this.graph(container)
      this.graph.d3Force('charge').strength(-1000)

      const scene = this.graph.scene()
      const renderer = this.graph.renderer()

      renderer.setAnimationLoop(() => {
        this.#thumbnails.forEach(thumbnail => {
          thumbnail.lookAt(scene.position)
        })
      })
    }
  }

  updateWorks(root) {
    this.root = root

    if (this.graph) {
      this.graph.graphData({
        nodes: this.root.descendants(),
        links: this.root.links()
      })
    }
  }

  getSelected() {
    return this.#selectedNode
  }

  focusNode(node) {
    if ((!node && !this.#highlightNodes) || (node && this.#selectedNode === node)) return

    this.clearFocus()
    this.#selectedNode = this.root.find(d => d === node)
    this.#highlightNodes.add(this.#selectedNode)
    this.#selectedNode.descendants().forEach(node => this.#highlightNodes.add(node))
   
    this.updateHighlight()
    this.rotateToSelected()
  }

  clearFocus() {
    console.log('clear!')
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
    const thumbnailUrl = node.data.attributes.thumbnail.data.attributes.url
    const url = PUBLIC_CMS_URL + thumbnailUrl
    const imgTexture = new THREE.TextureLoader().load(url)
    
    imgTexture.colorSpace = THREE.SRGBColorSpace
    const material = new THREE.MeshBasicMaterial({ map: imgTexture })
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(64, 36), material)
    plane.material.side = THREE.DoubleSide
    
    return plane
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