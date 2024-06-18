<script>
  import "../app.css"
  import { page } from "$app/stores"
  import { hierarchy } from 'd3-hierarchy'

  import logo from '$lib/images/VAM-logo.png';
  import { selected, root, flatNodeList, loadingLog } from '$lib/stores.js'
  import { ForceGraph, SiteNav, Progress } from '$lib'

  export let data
  
  let forceGraph
  
  // lodLog: preparing forcegraph data
  root.set(hierarchy(data.graphData))

  $: $root.eachAfter((node) => {
    if (!Array.isArray(node.data)) {
      $flatNodeList.push(node)
    }
  })
  $: selected.setFromPath($root, $page.url.pathname)
</script>
  
<div class="pointer-events-none min-h-screen max-w-screen max-h-screen min-w-screen h-screen
  grid grid-cols-[1rem_minmax(0,_min-content)_1fr_1fr_minmax(0,_max-content)] 
  grid-rows-[minmax(0,_1fr)_repeat(2,_auto)]
">
  {#if root}
    <SiteNav {forceGraph} />
    <slot />
    <ForceGraph bind:forceGraph />
  {/if}
</div>

<!-- <div class="{$forceGraphLoaded && 'hidden'} w-full h-full top-0 absolute bg-blue-300"> -->
<div class="w-full h-full top-0 p-4 absolute flex bg-dark">
  <div>
    {#each Object.values($loadingLog.logs) as log}
      {#if log.state}
        <p class="text-white/50 text-2xs">
          {log.state === 'started'
            ? log.onStarted
            : log.onComplete
          }
        </p>
      {/if}
    {/each}
  </div>
  <Progress value={$loadingLog.progress}/>
  <img src={logo} class="w-96 place-self-center m-auto" alt="VAM Studio Logo" />
</div>