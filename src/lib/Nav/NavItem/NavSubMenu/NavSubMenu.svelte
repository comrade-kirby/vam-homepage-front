<script>
  import { navOpen } from "$lib/stores"

  export let node
  export let forceGraph

  const fontSize = node.depth === 1 ? 'text-base' : 'text-sm'
  const leavesCount = node.leaves().length
  const childrenCount = node.children?.length
  const hasMultipleChildren = childrenCount > 1
  
  let isCollapsed = !hasMultipleChildren
  const toggleCollapse = () => isCollapsed = !isCollapsed

  const onClick = node.depth === 0
    ? () => navOpen.update((open) => !open)
    : toggleCollapse
</script>

<button type="button" class="group truncate ... flex items-center w-100 text-left text-black-olive/90 {fontSize} "
  on:click={onClick} 
  on:pointerenter={() => forceGraph.focusNode(node)}
  on:pointerleave={() => forceGraph.clearFocus()}
>
  {node.data[0]}
  {#if isCollapsed}
    <span class="text-black-olive/40 group-hover:text-black-olive/60 ml-1 text-sm truncate ...">
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