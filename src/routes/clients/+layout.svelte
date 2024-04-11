<script>
  import { forceGraph } from '$lib/stores'

  import SelectListLabel from '$lib/shared/SelectListLabel.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from '$lib/shared/ScrollContainer.svelte'
  import ClientLink from '$lib/shared/ClientLink.svelte';
  import SelectList from '$lib/shared/SelectList.svelte'

  export let data
  let expanded = true
  
  $: clients = data.clients
</script>


<nav on:pointerleave={() => $forceGraph.cancelNavHover()}>
  <ContentPane  width="w-80">

    <ScrollContainer>
      <button on:click={() => expanded = !expanded}>
        <SelectListLabel containsCurrent=true {expanded} childCount={clients.length}>
          all
        </SelectListLabel>
      </button>
      {#if expanded}
        <SelectList>
          {#each clients as client}
            <ClientLink {client} />
          {/each}
        </SelectList>
      {/if}
    </ScrollContainer>
  </ContentPane>
</nav>

<slot />