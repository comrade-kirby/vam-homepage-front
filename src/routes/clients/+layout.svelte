<script>
  import { forceGraph } from '$lib/stores'
  
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from '$lib/shared/ScrollContainer.svelte'
  import ClientLink from '$lib/shared/ClientLink.svelte';
  import SelectList from '$lib/shared/SelectList.svelte'

  export let data

  $: clients = data.clients
</script>


<nav on:pointerleave={() => $forceGraph.cancelNavHover()}>
  <ContentPane  width="w-80">

    <ScrollContainer>
      <SelectList>
        {#each clients as client}
          <ClientLink {client} />
        {/each}
      </SelectList>
    </ScrollContainer>
  </ContentPane>
</nav>

<slot />