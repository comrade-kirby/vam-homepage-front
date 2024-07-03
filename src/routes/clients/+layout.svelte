<script>
  import {
    PageNav,
    ClientLink,
    SelectList
  } from '$lib'

  export let data
  
  const href = '/clients'
  const labelText = "ALL"
  
  $: clients = data.clients
</script>

<PageNav let:onClick route="/clients">
  <SelectList {labelText} collapsable selectable containsCurrent
    let:isSelected
    let:item={client} 
    items={clients}
  >
    <a slot="label-link" {href} class="w-full" >
      {labelText}
    </a>

    <ClientLink {client} {isSelected} onClick={onClick} />
  </SelectList>
</PageNav>

<slot />