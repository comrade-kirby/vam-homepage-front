<script>
  import { onMount } from 'svelte';
  import { selected, tempFocus } from '$lib/stores'
  import { ForceGraph } from './ForceGraph';

  export let root
  export let forceGraph

  let innerWidth
  let innerHeight
  let delayTimeout

  const focusDelay = (tempFocus, selected) => {
    clearTimeout(delayTimeout)
    
    delayTimeout = setTimeout(() => forceGraph?.focusNode(tempFocus || selected), 500)
  }

  $: forceGraph?.setSize(innerWidth, innerHeight)
  
  // TODO: fix for initial load after graph has cooled
  $: focusDelay($tempFocus, $selected)

  onMount(() => {
    const container = document.getElementById('force-graph-container')
    
    import('3d-force-graph').then((module) => {
      forceGraph = new ForceGraph(module)
      forceGraph.initialize()
      forceGraph.attach(container, innerWidth, innerHeight)
      forceGraph.updateWorks(root)
    })
  })
</script>

<svelte:window bind:innerWidth  bind:innerHeight  />
<div id='force-graph-container' class="absolute z-10 w-screen h-screen bg-blue-100" 
  on:wheel={(event) => forceGraph.onWheel(event)} />