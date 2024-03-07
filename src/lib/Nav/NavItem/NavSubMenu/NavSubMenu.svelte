<script>
  export let node
  export let forceGraph

  const fontSize = node.depth === 1 ? 'text-base' : 'text-sm'
  const leavesCount = node.leaves().length
  const childrenCount = node.children?.length
  const hasMultipleChildren = childrenCount > 1
  
  let isCollapsed = !hasMultipleChildren
  
  const toggleCollapse = () => isCollapsed = !isCollapsed
</script>

<button type="button" class="truncate ... flex items-center w-100 text-left opacity-90 {fontSize} "
  on:click={toggleCollapse} 
  on:pointerenter={() => forceGraph.focusNode(node)}
  on:pointerleave={() => forceGraph.clearFocus()}
>
  {node.data[0]}
  {#if isCollapsed}
    <span class="opacity-60 ml-1 text-sm truncate ...">
      {#if !hasMultipleChildren}
        / {node.children[0].data.title}
      {:else}
        +{leavesCount}
      {/if}
    </span>
  {/if}
</button>

<ul class="space-y-1" class:collapse={isCollapsed}>
  <slot />
</ul>