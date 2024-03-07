<script>
  export let node
  export let openPlayer
  export let forceGraph
</script>

<!-- use router to open video details -->
<a href="#" on:click={openPlayer} class="truncate ... w-100 opacity-60 text-sm"
  on:pointerenter={() => forceGraph.focusNode(node)}
  on:pointerleave={() => forceGraph.clearFocus()} >
  {node.data.title}
  <span>details</span>
</a>