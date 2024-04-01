<script>
  import { selected } from "$lib/stores"
  import { page } from "$app/stores"

  import NavLink from "./NavLink/NavLink.svelte"

  export let node
  export let forceGraph, detailsOpen, maxDepth

  let expanded = false
  
  const navData = node.data[0]
  const slug = navData.slug
  const leaves = node.leaves()
  const descendants = node.descendants()
  const children = node.children
  const href = slug

  console.log(node.depth)
  const hoverOn = () => forceGraph.onNavHover(slug)
  const hoverOff = () => forceGraph.cancelNavHover()
  const toggleExpanded = () => expanded = isCurrentRoute ? !expanded : expanded
  
  $: path = $page.url.pathname.replace('/details', '')
  $: isCurrentRoute = slug === path
  $: includesSelected = descendants && descendants.map(node => {
    return node.data.slug || node.data[0].slug
  }).includes(path)
  
  $: expanded = isCurrentRoute || includesSelected
</script>


<a {href} on:click={toggleExpanded} on:pointerenter={hoverOn} on:pointerleave={hoverOff}
  class="group truncate ... pb-0.5 flex w-100 text-left {
    node.depth === 1 
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

  {navData.name}

  {#if !expanded && node.depth > 1}
    <span class="text-black-olive/40 group-hover:text-black-olive/60 flex ml-1 text-xs truncate ...">
      {#if children.length > 1}
        +{leaves.length}
      {:else}
        / {children[0].data.name}
      {/if}
    </span>
  {/if}
</a>

{#if expanded}
  <ul class="space-y-1 mb-2 {includesSelected? 'border-l-2 pl-2 border-double border-black-olive/10' : null} ">
    {#each children as child}
      {#if child.children && child.depth < maxDepth}
        <svelte:self node={child} {forceGraph} {detailsOpen} />
      {:else}
        <NavLink node={child} {forceGraph} {detailsOpen} />
      {/if}
    {/each}
  </ul>
{/if}