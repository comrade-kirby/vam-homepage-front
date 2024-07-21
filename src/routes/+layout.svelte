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
  grid grid-cols-[min-content_auto_minmax(min-content,_1fr)_auto] 
  grid-rows-[minmax(0,_auto)_minmax(0,_1fr)_min-content_min-content]
">
  {#if root}
    <SiteNav />
    <slot />
    <ForceGraph bind:forceGraph />
  {/if}
</div>
<!-- <LoadingScreen /> -->
<ContactModal />