<script>
  import { onMount } from 'svelte';
  import { selected, root, cameraZoom, forceGraph, cameraTarget } from '$lib/stores'
  import { ForceGraph } from './ForceGraph';


  let innerWidth
  let innerHeight

  const onEngineStopCallback = () => $forceGraph?.select($selected)

  $: $forceGraph?.setSize(innerWidth, innerHeight)
  $: $forceGraph?.setZoom($cameraZoom)
  $: $forceGraph?.setCameraTargetCoordinates($cameraTarget)
  // TODO: fix for initial load after graph has cooled
  $: $forceGraph?.select($selected)

  onMount(() => {
    const container = document.getElementById('force-graph-container')
    
    import('3d-force-graph').then((module) => {
      forceGraph.set(new ForceGraph(module))

      $forceGraph.initialize(onEngineStopCallback)
      $forceGraph.attach(container, innerWidth, innerHeight)
      $forceGraph.updateWorks($root)
    })
  })
</script>

<svelte:window bind:innerWidth  bind:innerHeight  />
<div on:wheel={(event) => $forceGraph.onWheel(event)} 
  id='force-graph-container' 
  class="absolute top-0 left-0 z-10 w-screen h-screen graph-background"
/>