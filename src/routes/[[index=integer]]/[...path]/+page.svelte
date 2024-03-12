<script>
  import { hierarchy } from 'd3-hierarchy'

  import { selected, focused } from '$lib/stores.js'
  import { buildBreadcrumb, buildRelatedWorksList } from '$lib/helpers.js';
  
  import ForceGraph from '$lib/ForceGraph/ForceGraph.svelte'
  import Nav from '$lib/Nav/Nav.svelte'

  export let data
  let forceGraph
  
  const root = hierarchy(data.works)
  root.eachAfter(d => {
    d.data.href = buildBreadcrumb(root.path(d))
    d.getRelatedWorks = () => buildRelatedWorksList(d)
  })

  $: selected.setFromPath(root, data.path)
  $: focused.setFromPath($selected, data.index)
</script>

<Nav {forceGraph} {root} />
<ForceGraph bind:forceGraph {root} />