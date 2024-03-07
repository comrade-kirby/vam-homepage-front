<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  import { hierarchy } from 'd3-hierarchy'

  import Nav from '$lib/Nav/Nav.svelte'
  import Player from '$lib/PlayerModal/PlayerModal.svelte';
  
  export let data
  
  let forceGraph
  let innerWidth
  let innerHeight
  
  let playerOpen = false
  let graphIsReady = false
  let breadcrumb

  const root = hierarchy(data.works)

  const openPlayer = () => playerOpen = true
  const closePlayer = () => playerOpen = false
  const updateBreadcrumb = (text) => breadcrumb = text

  $: if (forceGraph) { forceGraph.setSize(innerWidth, innerHeight) }
  
  onMount( async () => {
    const container = document.getElementById('force-graph-container')
    forceGraph = new ForceGraph(updateBreadcrumb)
    await forceGraph.initialize()
    forceGraph.attach(container, innerWidth, innerHeight)
    graphIsReady = forceGraph.updateWorks(root)
  })
  
</script>

<svelte:window bind:innerWidth  bind:innerHeight  />

{#if graphIsReady }
  <Nav {openPlayer} {forceGraph} {breadcrumb} />
{/if}

<div id='force-graph-container' class="absolute z-10 w-screen h-screen bg-base-light" 
  on:wheel={(event) => forceGraph.onWheel(event)} 
></div>

{#if playerOpen}
  <Player worksList={forceGraph.getWorksList()} {closePlayer} />
{/if}