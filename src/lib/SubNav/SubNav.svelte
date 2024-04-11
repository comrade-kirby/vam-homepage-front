<script>
  import { page } from '$app/stores'
  
  import NavLink from './NavLink/NavLink.svelte'
  import SelectList from '$lib/shared/SelectList.svelte'
  import SelectListLabel from '$lib/shared/SelectListLabel.svelte'

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
  <SelectListLabel {containsCurrent} {expanded} childCount={leaves.length}>
    {nodeData.name.toLowerCase()}
  </SelectListLabel>
</a>

{#if expanded}
  <SelectList>
    {#each children as child}
      <NavLink node={child}  />
    {/each}
  </SelectList>
{/if}