<script>
  import { navOpen, selected } from "$lib/stores"

  export let node
  export let forceGraph

  const isTopLevelNav = node.depth === 0
  const leavesCount = node.leaves().length
  const childrenCount = node.children?.length
  const hasMultipleChildren = childrenCount > 1
  
  let isCollapsed = !hasMultipleChildren

  $: includesSelected = node.children.includes($selected)

  const toggleCollapse = () => isCollapsed = !isCollapsed

  const onClick = node.depth === 0
    ? () => navOpen.update((open) => !open)
    : toggleCollapse
</script>

<button type="button" class="group truncate ... flex items-center w-100 text-left {isTopLevelNav ? 'text-base text-orange-900/80' : 'text-sm text-black-olive/90'}"
  on:click={onClick} 
  on:pointerenter={() => forceGraph.focusNode(node)}
  on:pointerleave={() => forceGraph.clearFocus()}
>
  {node.data[0]}
  {#if isCollapsed}
    <span class="{includesSelected ? 'text-orange-900/80' : 'text-black-olive/40 group-hover:text-black-olive/60'} ml-1 text-xs truncate ...">
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