<script>
  import { page } from '$app/stores'
  import { forceGraph } from '$lib/stores'
  
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import PaneHeader from '$lib/shared/PaneHeader.svelte'
  import ScrollContainer from '$lib/shared/ScrollContainer.svelte'
  import ClientLink from '$lib/shared/ClientLink.svelte';

  export let data

  $: clientPaneOpen = $page.params.slug
  $: clients = data.clients
</script>


<nav on:pointerleave={() => $forceGraph.cancelNavHover()}>
  <ContentPane  width={clientPaneOpen ? 'w-64' : 'w-192' }>
    <PaneHeader>Clients</PaneHeader>

    <ScrollContainer>
      <div class={clientPaneOpen ? 'flex flex-col mt-4' : 'grid grid-cols-3 gap-4 mt-8'}>
        {#each clients as client}
          <ClientLink {client} {clientPaneOpen} />
        {/each}
      </div>
    </ScrollContainer>
  </ContentPane>
</nav>

<slot />