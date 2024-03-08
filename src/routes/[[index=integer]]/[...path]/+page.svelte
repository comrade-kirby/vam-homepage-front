<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  import { hierarchy } from 'd3-hierarchy'

  import Nav from '$lib/Nav/Nav.svelte'
  import Details from '$lib/Details/Details.svelte'
  import Player from '$lib/PlayerModal/PlayerModal.svelte';
  import { buildBreadcrumb, buildRelatedWorksList } from '$lib/helpers.js';
  
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

  const getFocused = (selected, data) => selected?.data.relatedWorks[data.index]

  const openPlayer = () => playerOpen = true
  const closePlayer = () => playerOpen = false
  const updateBreadcrumb = (text) => breadcrumb = text

  $: if (forceGraph) { forceGraph.setSize(innerWidth, innerHeight) }
  $: selected = root.find(d =>  buildBreadcrumb(root.path(d)) === `/${data.path}`)
  $: relatedWorks = selected?.data.relatedWorks
  $: focused = relatedWorks ? relatedWorks[data.index] : null
  // $: focused = selected.data.relatedWorks ? selected.data.relatedWorks[data.index] : null
  // $: focused = selected.data.relatedWorks ? getFocused(selected, data) : null
  $: currentIndex = data.index

  onMount( async () => {
    root.eachAfter(async d => {
      d.data.relatedWorks = buildRelatedWorksList(d)
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
    {#if selected}
      <Details {selected} {currentIndex} {root} />
    {/if}
  </div>
{/if}
<div id='force-graph-container' class="absolute z-10 w-screen h-screen bg-blue-100" 
  on:wheel={(event) => forceGraph.onWheel(event)} 
></div>

{#if playerOpen}
  <!-- <Player worksList={forceGraph.getWorksList()} {closePlayer} /> -->
{/if}