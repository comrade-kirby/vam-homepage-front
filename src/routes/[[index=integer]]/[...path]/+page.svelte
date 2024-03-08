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
  let selected
  let focused
  let currentIndex
  let playerOpen = false
  let graphIsReady = false

  const root = hierarchy(data.works)
 
  const openPlayer = () => playerOpen = true

  $: currentIndex = data.index
  $: selected = findSelectedFromPath(root, data.path)
  $: if (selected && selected.data.relatedWorks) focused = findFocusedFromPath(selected, data.index)
  $: if (graphIsReady) { forceGraph.setSize(innerWidth, innerHeight) }
  $: if (focused && focused.x) forceGraph.focusNode(focused)

  onMount( async () => {
    root.eachAfter(async d => {
      d.data.href = buildBreadcrumb(root.path(d))
      d.data.relatedWorks = buildRelatedWorksList(d)

      if (d === selected) focused = findFocusedFromPath(selected, data.index)
    })
    
    const container = document.getElementById('force-graph-container')
    forceGraph = new ForceGraph()
    await forceGraph.initialize()
    forceGraph.attach(container, innerWidth, innerHeight)
    graphIsReady = forceGraph.updateWorks(root)
    // improve this to wait for graph to cooldown
    if (focused) setTimeout(() => forceGraph.focusNode(focused), 1000)
  })
  
</script>

<svelte:window bind:innerWidth  bind:innerHeight  />
{#if graphIsReady }
<p>hello</p>
  <div class="flex absolute top-0 left-0 h-full z-20 bg-blue-100/70 backdrop-blur-sm">
    <!-- find current selection to highlight in nav -->
    <Nav {openPlayer} {forceGraph} {root} />
    {#if selected && focused}
      <Details {selected} {focused} />
    {/if}
  </div>
{/if}
<div id='force-graph-container' class="absolute z-10 w-screen h-screen bg-blue-100" 
  on:wheel={(event) => forceGraph.onWheel(event)} 
></div>

<!-- {#if playerOpen} -->
  <!-- <Player worksList={forceGraph.getWorksList()} {closePlayer} /> -->
<!-- {/if} -->