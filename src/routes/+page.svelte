<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  import { hierarchy } from 'd3-hierarchy'

  import NavItem from '$lib/NavItem.svelte';

  export let data
  
  const root = hierarchy(data.works)
  root.data[0] = "All Works"
  console.log(root.data)
  onMount( async () => {
    const container = document.getElementById('force-graph-container')
    const forceGraph = new ForceGraph()
    await forceGraph.initialize()
    forceGraph.attach(container)
    forceGraph.updateWorks(root)
  })
</script>

<nav class="flex">
  <NavItem data={root} hidden={false} />  
</nav>

<div id='force-graph-container'></div>