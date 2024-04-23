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
  <div class="h-screen w-screen flex text-tprimary/80">
    <SiteNav {forceGraph} />
    <div class="flex flex-initial w-full h-full self-end z-20 justify-start md:justify-between flex-col-reverse md:flex-row">
      <slot />
    </div>
  </div>

  <ForceGraph bind:forceGraph />
{/if}