<script>
  import "../app.css"
  import { page } from "$app/stores"
  import { hierarchy } from 'd3-hierarchy'

  import { selected, root, flatNodeList } from '$lib/stores.js'
  import { ForceGraph, SiteNav } from '$lib'

  export let data
  
  let forceGraph
  
  root.set(hierarchy(data.graphData))

  $: $root.eachAfter((node) => {
    if (!Array.isArray(node.data)) {
      $flatNodeList.push(node)
    }
  })
  $: selected.setFromPath($root, $page.url.pathname)
</script>

<div class="pointer-events-none min-h-screen max-w-screen max-h-screen min-w-screen h-screen
  grid grid-cols-[1rem_min-content_1fr_1fr_max-content] grid-rows-[_1fr_repeat(2,_fit-content(100%))]
">
  {#if root}
    <SiteNav {forceGraph} />
  <slot />
    <ForceGraph bind:forceGraph />
  {/if}
</div>