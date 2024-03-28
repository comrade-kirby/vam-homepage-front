<script>
  import "../app.css"
  import { page } from "$app/stores"
  import { hierarchy } from 'd3-hierarchy'

  import { selected } from '$lib/stores.js'
  import { sanitizeString } from "$lib/helpers.js"
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import ForceGraph from '$lib/ForceGraph/ForceGraph.svelte'
  import Nav from '$lib/Nav/Nav.svelte'

  export let data
  
  let forceGraph
  
  const createSlug = (node) => {
    switch (node.height) {
      case 1: return 'clients/' + node.data[0].slug
      case 2: return 'works/' + sanitizeString(node.data[0])
      case 3: return 'works'
    }
  }

  // maybe move to Forcegraph and bind root
  const root = hierarchy(data.graphData).eachAfter(d => {
    d.data.slug ||= createSlug(d)
    d.getRelatedWorks = () => buildRelatedWorksList(d)
  })

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