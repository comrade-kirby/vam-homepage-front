<script>
  import { onMount } from 'svelte';
  import { selected, root, cameraZoom, forceGraph, cameraTarget, loadingLog } from '$lib/stores'
  import { ForceGraph } from './ForceGraph';


  let innerWidth
  let innerHeight

  const onEngineStopCallback = () => {
    // loadingLog: selecting initial video...
    $forceGraph.select($selected)
  }
  

  $: $forceGraph?.setSize(innerWidth, innerHeight)
  $: $forceGraph?.setZoom($cameraZoom)
  $: $forceGraph?.setCameraTargetCoordinates($cameraTarget)
  // TODO: fix for initial load after graph has cooled
  $: $forceGraph?.select($selected)

  onMount(() => {
    loadingLog.start('import-3d-force-graph')
    const container = document.getElementById('force-graph-container')
    
    import('3d-force-graph').then((module) => {
      loadingLog.complete('import-3d-force-graph')
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
  class="relative pointer-events-auto -z-10 col-start-1 row-start-1 col-span-full row-span-full graph-background"
/>