import * as THREE from 'three'
import { PUBLIC_CMS_URL } from '$env/static/public'
import SpriteText from 'three-spritetext'

export class ForceGraph {
  #thumbnails = []
  #selected = null

  async initialize() {
    const ForceGraph3D = await import('3d-force-graph')
    
    this.graph = ForceGraph3D.default({controlType: 'orbit'})
      // .backgroundColor(this.backgroundColor)
      .dagMode('radialout')
      .dagLevelDistance(100)
      .nodeRelSize(1)
      .nodeId('data')
      .linkOpacity(1)
      .linkWidth(0.1)
      .enableNodeDrag(false)
      .linkDirectionalParticles(50)
      .linkDirectionalParticleWidth(0.4)
      .linkDirectionalParticleSpeed(0.0002)
      .linkDirectionalParticleResolution(1)
      .linkColor(() => '#FFAA99')
      .linkDirectionalParticleColor(() => '#AA3922')
      .cooldownTicks(60)
      .onEngineStop(() => {
        this.graph.zoomToFit(600, -200)
      })
      .onNodeClick(this.rotateToSelected())
      .nodeThreeObject((node) => {
        if (node.data.attributes) {
          const thumbnail = this.#imageNode(node)
          this.#thumbnails.push(thumbnail)
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

  selectNode(work) {
    const selected = this.root.find(d => {
      return d.data.attributes?.title === work
    })
    
    this.rotateToSelected()(selected)
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

  rotateToSelected() {
    return (node) => {
      const distance = 100;
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
  
      const newPos = node.x || node.y || node.z
        ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
        : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)
  
      this.graph.cameraPosition(
        newPos, 
        this.graph.scene.position,
        300  
      );
    }
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
    const text = node.data.data
      ? node.data.data.title
      : node.data[0]

    const sprite = new SpriteText(text)
    sprite.material.depthWrite = false // make sprite background transparent
    sprite.color = '#AA3922'
    sprite.textHeight = 4

    return sprite
  }
}