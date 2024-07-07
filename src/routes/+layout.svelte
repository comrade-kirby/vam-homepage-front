<script>
  import "../app.css"
  import { page } from "$app/stores"
  import { hierarchy } from 'd3-hierarchy'

  import { selected, root, flatNodeList } from '$lib/stores.js'
  import { ForceGraph, SiteNav, LoadingScreen, ContactModal } from '$lib'

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
  grid grid-cols-[min-content_1fr_1fr_minmax(0,_max-content)] 
  grid-rows-[minmax(0,_1fr)_repeat(3,_auto)]
">
  {#if root}
    <SiteNav {forceGraph} />
    <slot />
    <ForceGraph bind:forceGraph />
  {/if}
</div>
<LoadingScreen />
<ContactModal />