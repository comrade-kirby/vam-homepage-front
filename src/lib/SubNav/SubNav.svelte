<script>
  import { page } from '$app/stores'
  import { SelectList } from '$lib'
  
  import NavLink from './NavLink/NavLink.svelte'

  export let node, onClick
  
  const nodeData = node.data[0]
  const slug = nodeData.slug
  const descendants = node.descendants()
  const children = node.children
  const href = slug
  const labelText = nodeData.name.toUpperCase()
  
  $: path = $page.url.pathname.replace('/details', '')
  $: isCurrent = path === slug
  $: containsCurrent = descendants && descendants.map(node => {
    return node.data.slug || node.data[0].slug
  }).includes(path)
</script>

<SelectList {href} {labelText} {containsCurrent} selectable
  let:item={node} 
  let:isSelected
  items={children}
  collapsable={isCurrent}
>

  <a slot="label-link" {href} class="w-full max-w-full truncate ..." >
    {labelText}
  </a>

  <NavLink {node} {isSelected} {onClick} />
</SelectList>