<script>
  import { onMount } from 'svelte';
  import { ForceGraph } from '$lib/ForceGraph.js';
  import { hierarchy } from 'd3-hierarchy'

  import Nav from '$lib/Nav/Nav.svelte'
  import { selected, focused } from '$lib/stores.js'
  import { buildBreadcrumb, buildRelatedWorksList } from '$lib/helpers.js';
  
  export let data
  
  let forceGraph
  let innerWidth
  let innerHeight
  let graphIsReady = false

  const root = hierarchy(data.works)
 
  $: selected.setFromPath(root, data.path)
  $: focused.setFromPath($selected, data.index)
  $: if (graphIsReady) { forceGraph.setSize(innerWidth, innerHeight) }

  onMount( async () => {
    root.eachAfter(async d => {
      d.data.href = buildBreadcrumb(root.path(d))
      d.data.relatedWorks = buildRelatedWorksList(d)

      if (d === $selected) focused.setFromPath($selected, data.index)
    })
    
    const container = document.getElementById('force-graph-container')
    forceGraph = new ForceGraph()
    await forceGraph.initialize()
    forceGraph.attach(container, innerWidth, innerHeight)
    graphIsReady = forceGraph.updateWorks(root)
    
    // improve this to wait for graph to cooldown
    if ($focused) {
      setTimeout(() => forceGraph.focusNode($focused), 1000)
    }
  })
  
</script>

<svelte:window bind:innerWidth  bind:innerHeight  />
<Nav {forceGraph} {root} />
<div id='force-graph-container' class="absolute z-10 w-screen h-screen bg-blue-100" 
  on:wheel={(event) => forceGraph.onWheel(event)} />
