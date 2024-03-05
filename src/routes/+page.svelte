<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  import { hierarchy } from 'd3-hierarchy'

  import NavItem from '$lib/NavItem.svelte';
  import Player from '$lib/PlayerModal/PlayerModal.svelte';
  
  export let data
  
  let forceGraph
  let innerWidth
  let innerHeight
  let navOpen = true
  let playerOpen = false
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
    forceGraph.updateWorks(root)
  })
  
</script>

<svelte:window bind:innerWidth  bind:innerHeight  />

<nav class="absolute flex flex-col top-0 left-0 p-4 z-10 h-full bg-gray-300">
  <button on:click={() => navOpen = !navOpen} class="w-min self-end p-2" >
    <p>{navOpen ? "Close" : "Menu"}</p>
  </button>

  {#if navOpen}
    <div class="flex flex-col grow w-full mt-4 ">
      {#each root.children as child}
        <NavItem node={child} hidden={false} {forceGraph} {openPlayer}/>  
      {/each}
    </div>
  {/if}

  {#if breadcrumb}
    <p class="p-2">{breadcrumb}</p>
  {/if}
</nav>

<div id='force-graph-container' class="absolute z-0 w-screen h-screen">
</div>

{#if playerOpen}
  <Player worksList={forceGraph.getWorksList()} {closePlayer} />
{/if}