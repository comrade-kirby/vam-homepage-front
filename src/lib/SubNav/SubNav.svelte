<script>
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  
  import NavLink from './NavLink/NavLink.svelte'
  import SelectList from '$lib/shared/SelectList.svelte'

  export let node
  
  const nodeData = node.data[0]
  const slug = nodeData.slug
  const leaves = node.leaves()
  const descendants = node.descendants()
  const children = node.children
  const href = slug

  
  $: path = $page.url.pathname.replace('/details', '')
  $: isCurrent = path === slug
  $: containsCurrent = descendants && descendants.map(node => {
    return node.data.slug || node.data[0].slug
  }).includes(path)
</script>

<SelectList onClick={() => goto(href)} labelText={nodeData.name.toUpperCase()} childCount={leaves.length} collapsable={isCurrent} {containsCurrent} >
  {#each children as child}
    <NavLink node={child}  />
  {/each}
</SelectList>