<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  import { hierarchy } from 'd3-hierarchy'

  import Nav from '$lib/Nav/Nav.svelte'
  import Details from '$lib/Details/Details.svelte'
  // import Player from '$lib/PlayerModal/PlayerModal.svelte';
  import { buildBreadcrumb, buildRelatedWorksList, findFocusedFromPath, findSelectedFromPath } from '$lib/helpers.js';
  
  export let data
  
  let forceGraph
  let innerWidth
  let innerHeight
  let breadcrumb
  let selected
  let focused
  let currentIndex
  let playerOpen = false
  let graphIsReady = false

  const root = hierarchy(data.works)
 
  const openPlayer = () => playerOpen = true
  const updateBreadcrumb = (text) => breadcrumb = text

  $: currentIndex = data.index
  $: selected = findSelectedFromPath(root, data.path)
  $: if (selected && selected.data.relatedWorks) focused = findFocusedFromPath(selected, data.index)
  $: if (forceGraph) { forceGraph.setSize(innerWidth, innerHeight) }
  $: if (forceGraph) forceGraph.focusNode(focused)

  onMount( async () => {
    root.eachAfter(async d => {
      d.data.href = buildBreadcrumb(root.path(d))
      d.data.relatedWorks = buildRelatedWorksList(d)

      if (d === selected) focused = findFocusedFromPath(selected, data.index)
    })
    
    const container = document.getElementById('force-graph-container')
    forceGraph = new ForceGraph(updateBreadcrumb)
    await forceGraph.initialize()
    forceGraph.attach(container, innerWidth, innerHeight)
    graphIsReady = forceGraph.updateWorks(root)
  })
  
</script>

<svelte:window bind:innerWidth  bind:innerHeight  />
{#if graphIsReady }
  <div class="flex absolute top-0 left-0 h-full z-20 bg-blue-100/70 backdrop-blur-sm">
    <!-- find current selection to highlight in nav -->
    <Nav {openPlayer} {forceGraph} {breadcrumb} />
    {#if selected && focused}
      <Details {selected} {focused} />
    {/if}
  </div>
{/if}
<div id='force-graph-container' class="absolute z-10 w-screen h-screen bg-blue-100" 
  on:wheel={(event) => forceGraph.onWheel(event)} 
></div>

{#if playerOpen}
  <!-- <Player worksList={forceGraph.getWorksList()} {closePlayer} /> -->
{/if}