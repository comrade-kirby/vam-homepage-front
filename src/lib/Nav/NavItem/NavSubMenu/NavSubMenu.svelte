<script>
  import { page } from '$app/stores'
  import { selected } from "$lib/stores"

  export let node
  export let forceGraph

  let expanded = false

  const leavesCount = node.leaves().length
  const childrenCount = node.children?.length
  const isTopLevelNav = node.depth === 0
  const isCurrentRoute = `/${$page.params.path}` === node.data.href 
  const hasMultipleChildren = childrenCount > 1

  const toggleExpanded = () => {
    // TODO: FIX! collapse if parent of current selection
    console.log(expanded)
    if (isCurrentRoute) expanded = !expanded
    console.log(expanded)
  }
  
  $: includesSelected = node.children.includes($selected)
  $: expanded = `/${$page.params.path}`.includes(node.data.href)
</script>

<a href={node.data.href} class="group truncate ... pb-0.5 flex w-100 text-left {isTopLevelNav ? 'text-base text-orange-900/80' : 'text-sm text-black-olive/90'}"
  on:click={toggleExpanded}
  on:pointerenter={() => forceGraph.onNavHover(node)}
  on:pointerleave={() => forceGraph.cancelNavHover()}
>
  {node.data[0]}
  {#if !expanded && !isTopLevelNav}
    <span class="{includesSelected ? 'text-orange-900/80' : 'text-black-olive/40 group-hover:text-black-olive/60'} flex ml-1 text-xs truncate ...">
      {#if !hasMultipleChildren}
        / {node.children[0].data.title}
      {:else}
        +{leavesCount}
      {/if}
    </span>
  {/if}
</a>
  
  {#if expanded}
    <ul class="space-y-1" class:collapse={!expanded}>
      <slot />
    </ul>
  {/if}

