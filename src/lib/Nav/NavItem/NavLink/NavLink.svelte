<script>
  export let node, openPlayer, forceGraph, breadcrumb

  let hover = false
</script>

<!-- use router to open video details -->
<!-- on:click={openPlayer}  -->
<a href="{breadcrumb}" class="flex items-end group truncate ... max-w-100 text-black-olive/50 hover:text-black-olive/60 text-sm"
  on:pointerenter={() => forceGraph.focusNode(node)}
  on:pointerleave={() => forceGraph.clearFocus()} >
  <span class="group-hover:truncate ...">{node.data.title}</span>
  <span class="min-w-fit text-black-olive/30 group-hover:text-orange-800/90 ml-2 text-xs">details</span>
</a>