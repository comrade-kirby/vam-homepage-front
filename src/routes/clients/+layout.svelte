<script>
  import PageNav from '$lib/shared/PageNav.svelte'
  import ClientLink from '$lib/shared/ClientLink.svelte';
  import SelectList from '$lib/shared/SelectList.svelte';

  export let data
  
  const href = '/clients'
  const labelText = "ALL CLIENTS"
  
  $: clients = data.clients
</script>

<PageNav>
  <SelectList {labelText} collapsable containsCurrent
    let:item={client} 
    let:isSelected
    items={clients}
  >
    <a slot="label-link" {href} class="w-full" >
      {labelText}
    </a>

    <ClientLink {client} {isSelected} />
  </SelectList>
</PageNav>

<slot />