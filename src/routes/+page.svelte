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

  const selectCallback = (work) => {
    forceGraph.selectNode(work)
  }
</script>

<nav class="flex">
  <NavItem data={root} hidden={false} {selectCallback} />  
</nav>

<div id='force-graph-container'></div>