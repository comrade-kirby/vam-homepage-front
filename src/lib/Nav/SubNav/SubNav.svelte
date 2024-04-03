<script>
  import NavLabel from '$lib/shared/NavLabel.svelte'
  import { page } from '$app/stores'

  import NavLeafCount from '$lib/shared/NavLeafCount.svelte'
  import NavLink from './NavLink/NavLink.svelte'

  export let node
  export let forceGraph, detailsOpen, maxDepth

  let expanded = false
  
  const nodeData = node.data[0]
  const slug = nodeData.slug
  const leaves = node.leaves()
  const descendants = node.descendants()
  const children = node.children
  const href = slug

  const hoverOn = () => forceGraph.onNavHover(slug)
  const toggleExpanded = () => expanded = isCurrent ? !expanded : expanded
  
  $: path = $page.url.pathname.replace('/details', '')
  $: isCurrent = slug === path
  $: containsCurrent = descendants && descendants.map(node => {
    return node.data.slug || node.data[0].slug
  }).includes(path)
  
  $: expanded = isCurrent || containsCurrent
</script>


<a {href} on:click={toggleExpanded} on:pointerenter={hoverOn} class="group truncate ... pb-0.5 flex items-center w-100 text-left">
  <NavLabel depth={node.depth} active={containsCurrent}>
    {nodeData.name}
  </NavLabel>

  {#if !expanded && node.depth > 1}
    <NavLeafCount {leaves} />
  {/if}
</a>

{#if expanded}
  <ul role="list" class="space-y-1 mb-2 {containsCurrent? 'border-l-2 pl-2 border-double border-black-olive/10' : null} ">
    {#each children as child}
      {#if child.children && child.depth < maxDepth}
        <svelte:self node={child} {forceGraph} {detailsOpen} />
      {:else}
        <NavLink node={child} {forceGraph} {detailsOpen} />
      {/if}
    {/each}
  </ul>
{/if}