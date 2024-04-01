<script>
  import { selected } from "$lib/stores"

  import NavLabel from "$lib/shared/NavLabel.svelte"
  
  export let node, forceGraph, detailsOpen
  
  const nodeData = node.data[0] || node.data
  const selectUrl = nodeData.slug
  const detailsUrl = selectUrl + '/details'
  
  $: selectedData = $selected?.data[0] || $selected?.data
  $: isSelected = nodeData.slug === selectedData?.slug
  $: isOpen = isSelected && detailsOpen
  $: linkToDetails = isSelected || detailsOpen
  $: href = linkToDetails ? detailsUrl : selectUrl
</script>

<a {href} on:pointerenter={() => forceGraph.onNavHover(nodeData.slug)} class="flex items-end group truncate ... max-w-100">
  <NavLabel depth={node.depth} active={isSelected}>
    {nodeData.name}
  </NavLabel>
  
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