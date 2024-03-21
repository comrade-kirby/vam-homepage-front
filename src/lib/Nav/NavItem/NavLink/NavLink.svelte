<script>
  import { selected } from "$lib/stores"

  export let node, forceGraph, detailsOpen, openDetails
  
  let isSelected
  
  $: isSelected = node === $selected
</script>

<a href="{node.data.href}" 
  class="flex items-end group truncate ... max-w-100 text-black-olive/50 hover:text-black-olive/60 text-xs"
  on:click={() => isSelected ? openDetails() : null}
  on:pointerenter={() => forceGraph.onNavHover(node)}
  on:pointerleave={() => forceGraph.cancelNavHover()}
>
  
  <span class={isSelected ? 'truncate ... text-orange-900/80' : 'group-hover:truncate ...'}>{node.data.title}</span>
  {#if isSelected && !detailsOpen}
    <span class="{isSelected ? 'text-orange-800/90' : 'text-black-olive/30 group-hover:text-orange-800/90'} min-w-fit ml-2 mb-px text-2xs">details</span>
  {/if}
</a>