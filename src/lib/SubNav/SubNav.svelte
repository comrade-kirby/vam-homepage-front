<script>
  import { page } from '$app/stores'
  import { SelectList, SelectListItem, SelectListLabel } from '$lib'
  
  import NavLink from './NavLink/NavLink.svelte'

  export let node, onClick
  export let small = false
  export let expanded = false
  export let index = 99999
  export let accent = false
  export let selectable = false
  const nodeData = node.data[0]
  const slug = nodeData.slug
  const descendants = node.descendants()
  const children = node.children
  const href = slug
  
  $: itemSlug = node.data[0].slug
  $: path = $page.url.pathname
  $: isSelected = selectable && path.includes(itemSlug)
  $: isCurrent = path === slug
  $: containsCurrent = descendants && descendants.map(node => {
    return node.data.slug || node.data[0].slug
  }).includes(path)
</script>

<SelectList {containsCurrent} {node} {small} {href} {accent} 
  {expanded} {isSelected}
  items={children}
  collapsable={isCurrent}
>
    {#each children as child}
      {#if child.children}
      <svelte:self node={child} onclick={() => console.log('click')} small={true} accent={true} {index} selectable />
      {:else }
        <SelectListItem let:isSelected item={child} selectable>
          <NavLink node={child} {isSelected} {onClick} />
        </SelectListItem>
      {/if}
    {/each}
</SelectList> 