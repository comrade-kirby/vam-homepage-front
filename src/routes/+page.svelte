<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  import { hierarchy } from 'd3-hierarchy'

  import NavItem from '$lib/NavItem.svelte';

  export let data
  
  let forceGraph
  let navOpen = false
  const root = hierarchy(data.works)
  root.data[0] = "All Works"

  onMount( async () => {
    const container = document.getElementById('force-graph-container')
    forceGraph = new ForceGraph()
    await forceGraph.initialize()
    forceGraph.attach(container)
    forceGraph.updateWorks(root)
  })
</script>

<nav class="">
  <li on:click={() => navOpen = !navOpen}>{navOpen ? "Close" : "Menu"}</li>

  {#if navOpen}
    <div class="flex">
      {#each root.children as child}
        <NavItem node={child} hidden={false} {forceGraph}/>  
      {/each}
    </div>
  {/if}
</nav>

<div id='force-graph-container'></div>