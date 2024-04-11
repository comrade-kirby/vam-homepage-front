<script>
  import "../app.css"
  import { page } from "$app/stores"
  import { hierarchy } from 'd3-hierarchy'

  import { selected, root } from '$lib/stores.js'
  import ForceGraph from '$lib/ForceGraph/ForceGraph.svelte'
  import Nav from '$lib/Nav/Nav.svelte'

  export let data
  
  let forceGraph
  
  root.set(hierarchy(data.graphData))
  $: selected.setFromPath($root, $page.url.pathname)
</script>

{#if root}
  <div class="flex ">
    <Nav {forceGraph} />
    <slot />
  </div>

  <ForceGraph bind:forceGraph />
{/if}