<script>
  import { page } from '$app/stores'
  
  import NavLeafCount from '$lib/shared/NavLeafCount.svelte'
  import NavLink from './NavLink/NavLink.svelte'
  import SelectList from '$lib/shared/SelectList.svelte'

  export let node
  
  const nodeData = node.data[0]
  const slug = nodeData.slug
  const leaves = node.leaves()
  const descendants = node.descendants()
  const children = node.children
  const href = slug

  const toggleExpanded = () => expanded = isCurrent ? !expanded : true
  
  $: path = $page.url.pathname.replace('/details', '')
  $: isCurrent = path === slug
  $: containsCurrent = descendants && descendants.map(node => {
    return node.data.slug || node.data[0].slug
  }).includes(path)
  
  $: expanded = true
</script>


<a {href} on:click={toggleExpanded} class="group truncate ...  pb-0.5 flex items-center w-100 text-left tracking-wider">
  <span class="text-xs  {containsCurrent ? 'text-orange-900/90' : 'text-orange-900/80 hover:text-orange-900/90'}">
    {nodeData.name.toLowerCase()}
  </span>

  {#if !expanded}
    <NavLeafCount {leaves} />
  {/if}
</a>

{#if expanded}
  <SelectList>
    {#each children as child}
      <NavLink node={child}  />
    {/each}
  </SelectList>
{/if}