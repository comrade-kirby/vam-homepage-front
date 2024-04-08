<script>
  import { selected, forceGraph } from "$lib/stores"

  import NavLabel from "$lib/shared/NavLabel.svelte"
  import NavLeafCount from "$lib/shared/NavLeafCount.svelte"

  export let node
  
  const nodeData = node.data[0] || node.data
  const leaves = node.leaves()
  
  $: selectedData = $selected?.data[0] || $selected?.data
  $: isSelected = nodeData.slug === selectedData?.slug
  $: isOpen = isSelected
  $: href = nodeData.slug
</script>

<a {href} on:pointerenter={() => $forceGraph.onNavHover(nodeData.slug)} class="flex items-center group truncate ... max-w-100">
  <NavLabel depth={node.depth} active={isSelected}>
    {nodeData.name}
  </NavLabel>

  {#if leaves.length > 1 && !isOpen}
    <NavLeafCount {leaves} />
  {/if}
</a>