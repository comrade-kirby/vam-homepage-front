<script>
  import PageNav from '$lib/shared/PageNav.svelte'
  import ClientLink from '$lib/shared/ClientLink.svelte';
  import SelectList from '$lib/shared/SelectList.svelte'

  export let data
  
  $: clients = data.clients
</script>

<PageNav>
  <SelectList labelText="ALL CLIENTS" childCount={clients.length}>
    {#each clients as client}
      <ClientLink {client} />
    {/each}
  </SelectList>
</PageNav>

<slot />