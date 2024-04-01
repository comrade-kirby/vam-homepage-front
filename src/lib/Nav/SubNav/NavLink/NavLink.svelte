<script>
  import { selected } from "$lib/stores"

  import NavLabel from "$lib/shared/NavLabel.svelte"
  import NavLeafCount from "$lib/shared/NavLeafCount.svelte"

  export let node, forceGraph, detailsOpen
  
  const nodeData = node.data[0] || node.data
  const leaves = node.leaves()
  const selectUrl = nodeData.slug
  const detailsUrl = selectUrl + '/details'
  
  $: selectedData = $selected?.data[0] || $selected?.data
  $: isSelected = nodeData.slug === selectedData?.slug
  $: isOpen = isSelected && detailsOpen
  $: linkToDetails = isSelected || detailsOpen
  $: href = linkToDetails ? detailsUrl : selectUrl
</script>

<a {href} on:pointerenter={() => forceGraph.onNavHover(nodeData.slug)} class="flex items-center group truncate ... max-w-100">
  <NavLabel depth={node.depth} active={isSelected}>
    {nodeData.name}
  </NavLabel>

  {#if leaves.length > 1 && !isOpen}
    <NavLeafCount {leaves} />
  {/if}
  
  {#if linkToDetails}
    <span class="min-w-fit ml-2 text-2xs group-hover:text-orange-700/90 {
      isOpen 
        ? 'text-orange-800/90' 
        : isSelected 
          ? 'text-black-olive/40 '
          : 'collapse group-hover:visible'
    }">
      details
    </span>
  {/if}
</a>