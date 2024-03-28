<script>
  import { selected } from "$lib/stores"
  
  export let node, forceGraph, detailsOpen
  
  const selectUrl = '/' + node.data.slug
  const detailsUrl = selectUrl + '/details'
  
  $: isSelected = node?.data.slug === $selected?.data.slug
  $: isOpen = isSelected && detailsOpen
  $: linkToDetails = isSelected || detailsOpen
  $: href = linkToDetails ? detailsUrl : selectUrl
</script>

<a {href} 
  class="flex items-end group truncate ... max-w-100 "
  on:pointerenter={() => forceGraph.onNavHover(node.data.slug)}
  on:pointerleave={() => forceGraph.cancelNavHover()}
>
  <span class="text-xs truncate ... {isSelected ? 'text-orange-900/80' : 'text-black-olive/50 hover:text-black-olive/70'}">
    {node.data.title}
  </span>
  
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