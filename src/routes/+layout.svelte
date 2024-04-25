<script>
  import "../app.css"
  import { page } from "$app/stores"
  import { hierarchy } from 'd3-hierarchy'

  import { selected, root } from '$lib/stores.js'
  import ForceGraph from '$lib/ForceGraph/ForceGraph.svelte'
  import SiteNav from '$lib/SiteNav/SiteNav.svelte'

  export let data
  
  let forceGraph
  
  root.set(hierarchy(data.graphData))
  $: selected.setFromPath($root, $page.url.pathname)
</script>

{#if root}
  <div class="z-20 h-screen w-screen flex md:flex-row-reverse text-tprimary/80">
    <div class="pointer-events-none flex flex-initial z-20 w-full h-full max-h-full z-20 justify-start flex-col-reverse md:justify-between md:flex-row">
      <slot />
    </div>
    <SiteNav {forceGraph} />
  </div>

  <ForceGraph bind:forceGraph />
{/if}