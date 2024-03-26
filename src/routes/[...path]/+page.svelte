<script>
  import { hierarchy } from 'd3-hierarchy'

  import { selected } from '$lib/stores.js'
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import ForceGraph from '$lib/ForceGraph/ForceGraph.svelte'
  import Nav from '$lib/Nav/Nav.svelte'

  export let data
  
  let forceGraph
  
  const root = hierarchy(data.works)
  root.data[0] = "Works"

  root.eachAfter(d => {
    d.data.slug ||= d.data[0].replace(/\s+/g, '_').replace('?', '')
    d.getRelatedWorks = () => buildRelatedWorksList(d)
  })
// nav and details open with route
  $: selected.setFromPath(root, data.path)
</script>

{#if root}
  <Nav {forceGraph} {root} />
  <ForceGraph bind:forceGraph {root} />
{/if}