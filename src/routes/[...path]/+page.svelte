<script>
  import { hierarchy } from 'd3-hierarchy'

  import { selected } from '$lib/stores.js'
  import { buildBreadcrumb, buildRelatedWorksList } from '$lib/helpers.js';
  
  import ForceGraph from '$lib/ForceGraph/ForceGraph.svelte'
  import Nav from '$lib/Nav/Nav.svelte'

  export let data
  let forceGraph
  
  const root = hierarchy(data.works)
  root.data[0] = "Works"

  root.eachAfter(d => {
    d.data.href = "/" + buildBreadcrumb(root.path(d))
    d.getRelatedWorks = () => buildRelatedWorksList(d)
  })

  $: selected.setFromPath(root, data.path)
  // $: focused.setFromPath($selected, data.index)
  // $: reactive func to set focused after forceGraph cools
</script>

{#if root}
  <Nav {forceGraph} {root} />
  <ForceGraph bind:forceGraph {root} />
{/if}