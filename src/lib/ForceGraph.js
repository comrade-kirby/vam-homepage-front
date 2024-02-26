import * as THREE from 'three'
import { PUBLIC_CMS_URL } from '$env/static/public'
import SpriteText from 'three-spritetext'
import { hierarchy } from 'd3-hierarchy'

export class ForceGraph {
  constructor() {
    console.log('FORCEGRAPH constructor')

    // const videos = []
  }

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
      .onNodeClick(() => console.log('clicked'))
      .nodeThreeObject((node) => {
        if (node.data.attributes) {
          return this.#imageNode(node)
        } else {
          return this.#textNode(node)
        }
      })
  }

  attach(container) {
    console.log('FORCEGRAPH attach')
    if (this.graph) {
      this.graph(container)
    }
  }

  updateWorks(works) {
    console.log('FORCEGRAPH updateWorks')

    const root = hierarchy(works)
    
    if (this.graph) {
      this.graph.graphData({
        nodes: root.descendants(),
        links: root.links()
      })
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