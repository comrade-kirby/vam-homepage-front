<script>
  import { onMount } from 'svelte';
  import { selected } from '$lib/stores'
  import { ForceGraph } from './ForceGraph';

  import { cameraTarget, cameraFocalLength } from '$lib/stores'

  export let root
  export let forceGraph

  let innerWidth
  let innerHeight

  const onEngineStopCallback = () => forceGraph?.select($selected)

  $: forceGraph?.setSize(innerWidth, innerHeight)
  $: forceGraph?.setFocalLength($cameraFocalLength)
  $: forceGraph?.setCameraTargetCoordinates($cameraTarget)
  // TODO: fix for initial load after graph has cooled
  $: forceGraph?.select($selected)

  onMount(() => {
    const container = document.getElementById('force-graph-container')
    
    import('3d-force-graph').then((module) => {
      forceGraph = new ForceGraph(module)
      forceGraph.initialize(onEngineStopCallback)
      forceGraph.attach(container, innerWidth, innerHeight)
      forceGraph.updateWorks(root)
    })
  })
</script>

<svelte:window bind:innerWidth  bind:innerHeight  />
<div id='force-graph-container' class="absolute z-10 w-screen h-screen bg-blue-100" 
  on:wheel={(event) => forceGraph.onWheel(event)} />