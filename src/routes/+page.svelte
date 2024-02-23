<script>
  import { onMount } from 'svelte';
  import { hierarchy } from 'd3-hierarchy'

  export let data

  onMount( async () => {
    const ForceGraph3D = await import('3d-force-graph')
    const videos = []
    const root = hierarchy(data.groupedWorks)
    const container = document.getElementById('force-graph-container')
    const graph = ForceGraph3D.default({controlType: 'orbit'})
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
      .linkDirectionalParticleColor(() => '#AA3922')(container)

    graph.graphData({
      nodes: root.descendants(),
      links: root.links()
    })
  })
</script>

<div id='force-graph-container'></div>