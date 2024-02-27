<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  import { hierarchy } from 'd3-hierarchy'

  import NavItem from '$lib/NavItem.svelte';

  export let data
  
  let forceGraph

  const root = hierarchy(data.works)
  root.data[0] = "All Works"

  onMount( async () => {
    const container = document.getElementById('force-graph-container')
    forceGraph = new ForceGraph()
    await forceGraph.initialize()
    forceGraph.attach(container)
    forceGraph.updateWorks(root)
  })

  const selectCallback = (node) => {
    forceGraph.selectNode(node)
  }

  const hoverCallback = (node) => {
    forceGraph.highlight(node)
  }
</script>

<nav class="flex">
  <NavItem node={root} hidden={false} {selectCallback} {hoverCallback}/>  
</nav>

<div id='force-graph-container'></div>