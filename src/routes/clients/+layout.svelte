<script>
  import PageNav from '$lib/shared/PageNav/PageNav.svelte'
  import ClientLink from '$lib/shared/ClientLink.svelte';
  import SelectList from '$lib/shared/SelectList.svelte';

  export let data
  
  const href = '/clients'
  const labelText = "ALL CLIENTS"
  
  $: clients = data.clients
</script>

<PageNav let:minimize>
  <SelectList {labelText} collapsable selectable containsCurrent
    let:isSelected
    let:item={client} 
    items={clients}
  >
    <a slot="label-link" {href} class="w-full" >
      {labelText}
    </a>

    <ClientLink {client} {isSelected} onClick={minimize} />
  </SelectList>
</PageNav>

<slot />