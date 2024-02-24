<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  
  export let data

  onMount( async () => {
    const container = document.getElementById('force-graph-container')
    const forceGraph = new ForceGraph()
    await forceGraph.initialize()
    forceGraph.attach(container)
    forceGraph.updateWorks(data.works)
  })
</script>

<div id='force-graph-container'></div>