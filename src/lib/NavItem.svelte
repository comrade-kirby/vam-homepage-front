<script>
  export let node
  export let hidden = true
  export let forceGraph   
  export let hoverCallback
  export let openPlayer
  
  const isLeafNode = node.height === 0
  const leavesCount = node.leaves().length
  const childrenCount = node.children?.length
  const hasChildren = childrenCount > 0
  const hasMultipleChildren = childrenCount > 1
  const nodeTitle = node.data.title || node.data[0]
  const fontSize = node.depth === 1 ? 'text-base' : 'text-sm'

  let isCollapsed = hasChildren && !hasMultipleChildren

  const toggleCollapse = () => isCollapsed = !isCollapsed
</script>

<li class="flex flex-col pl-1">
  {#if isLeafNode }
    <!-- use router to open video details -->
    <a href="#" class="truncate ... w-100 opacity-60 text-sm"
      on:pointerenter={() => forceGraph.focusNode(node)}
      on:pointerleave={() => forceGraph.clearFocus()}
    >
      {nodeTitle}
    </a>
  {:else}
    <button type="button" class="truncate flex items-center ... w-100 text-left opacity-90 {fontSize} "
      on:click={toggleCollapse} 
      on:pointerenter={() => forceGraph.focusNode(node)}
      on:pointerleave={() => forceGraph.clearFocus()}
    >
      {nodeTitle}
      {#if isCollapsed}
        <span class="opacity-60 ml-1 text-sm">
          {#if !hasMultipleChildren}
            / {node.children[0].data.title}
          {:else}
            +{leavesCount}
          {/if}
        </span>
      {/if}
    </button>
  {/if}
  
  {#if hasChildren}
    <ul class="space-y-1" class:collapse={isCollapsed}>
      {#each node.children as child}
        <svelte:self node={child} {forceGraph} {openPlayer} />
      {/each}
    </ul>
  {/if}
</li>