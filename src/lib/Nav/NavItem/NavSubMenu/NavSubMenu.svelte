<script>
  import { selected } from "$lib/stores"

  export let node
  export let forceGraph

  let expanded = false

  const leavesCount = node.leaves().length
  const childrenCount = node.children?.length
  const isTopLevelNav = node.depth === 0
   
  const hasMultipleChildren = childrenCount > 1

  const toggleExpanded = () => expanded = isCurrentRoute ? !expanded : expanded
  
  $: isCurrentRoute = node === $selected
  $: expanded = node.descendants().includes($selected)
</script>

<a href="/{node.data.slug}" class="group truncate ... pb-0.5 flex w-100 text-left {isTopLevelNav ? 'text-base text-orange-900/80' : 'text-sm text-black-olive/90'}"
  on:click={toggleExpanded}
  on:pointerenter={() => forceGraph.onNavHover(node)}
  on:pointerleave={() => forceGraph.cancelNavHover()}
>
  {node.data[0]}
  {#if !expanded && !isTopLevelNav}
    <span class="text-black-olive/40 group-hover:text-black-olive/60' flex ml-1 text-xs truncate ...">
      {#if !hasMultipleChildren}
        / {node.children[0].data.title}
      {:else}
        +{leavesCount}
      {/if}
    </span>
  {/if}
</a>
  
  {#if expanded}
    <ul class="space-y-1">
      <slot />
    </ul>
  {/if}

