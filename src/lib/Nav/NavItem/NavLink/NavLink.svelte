<script>
  import { selected } from "$lib/stores"

  export let node, forceGraph, openDetails
  let isSelected

  $: isSelected = node === $selected
</script>

<a href="{node.data.href}" 
  class="flex items-end group truncate ... max-w-100 text-black-olive/50 hover:text-black-olive/60 text-sm"
  on:click={openDetails}
  on:pointerenter={() => forceGraph.focusNode(node)}
  on:pointerleave={() => forceGraph.clearFocus()} >
  
  <span class="{isSelected ? 'truncate ... text-orange-900/80' : 'group-hover:truncate ...'}">{node.data.title}</span>
  <span class="{isSelected ? 'text-orange-800/90' : 'text-black-olive/30 group-hover:text-orange-800/90'} min-w-fit ml-2 text-xs">details</span>
</a>