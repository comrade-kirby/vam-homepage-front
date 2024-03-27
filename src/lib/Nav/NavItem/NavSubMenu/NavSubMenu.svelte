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
  $: includesSelected = node.descendants().includes($selected)
  $: expanded = includesSelected
</script>

<a href="/{node.data.slug}" 
  on:click={toggleExpanded}
  on:pointerenter={() => forceGraph.onNavHover(node)}
  on:pointerleave={() => forceGraph.cancelNavHover()}
  class="group truncate ... pb-0.5 flex w-100 text-left {
    isTopLevelNav 
      ? 'text-base ' + (includesSelected
        ? 'text-orange-900'
        : 'text-orange-900/80 hover:text-orange-900' 
      )
      : 'text-sm ' + (includesSelected
        ? 'text-orange-900'
        : 'text-black-olive/90 hover:text-orange-900'
      )
  }"
>

  {node.data[0]}

  {#if !expanded && !isTopLevelNav}
    <span class="text-black-olive/40 group-hover:text-black-olive/60 flex ml-1 text-xs truncate ...">
      {#if !hasMultipleChildren}
        / {node.children[0].data.title}
      {:else}
        +{leavesCount}
      {/if}
    </span>
  {/if}
</a>

{#if expanded}
  <ul class="space-y-1 {includesSelected? 'border-l-2 border-double border-black-olive/10' : null} ">
    <slot />
  </ul>
{/if}

