<script>
  import "../app.css"
  import { page } from "$app/stores"
  import { hierarchy } from 'd3-hierarchy'

  import { selected } from '$lib/stores.js'
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import ForceGraph from '$lib/ForceGraph/ForceGraph.svelte'
  import Nav from '$lib/Nav/Nav.svelte'

  export let data
  
  let forceGraph
  
  const root = hierarchy(data.graphData)
 
 $: selected.setFromPath(root, $page.url.pathname)
</script>

{#if root}
  <!-- use page in nav -->
  <div class="relative z-20  w-fit h-screen flex bg-blue-100/70 backdrop-blur-sm">
    <Nav {forceGraph} />
    <slot />
  </div>
  <ForceGraph bind:forceGraph {root} />
{/if}