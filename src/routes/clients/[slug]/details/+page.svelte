<script>
  import PlaylistItem from '$lib/shared/PlaylistItem.svelte';
  import SelectList from '$lib/shared/SelectList.svelte';
  import MenuLink from '$lib/shared/PressLink.svelte'
  import DetailsWrapper from '$lib/shared/DetailsWrapper.svelte'

  export let data
  
  $: client = data.client.attributes
  $: closeUrl = '/clients/' + client.slug
  $: works = client.works.data
  $: presses = client.presses.data
</script>

<DetailsWrapper collapse {closeUrl} title={client.name}>
  
  {#if works.length > 0}
    <SelectList labelText="works" childCount={works.length}>
      {#each works as work}
        <PlaylistItem  node={work} />
      {/each}
    </SelectList>
  {/if}

  {#if presses.length > 0}
    <SelectList labelText="press" childCount={presses.length}>
      {#each presses as press}
        <MenuLink {press} />
      {/each}
    </SelectList>
  {/if}
</DetailsWrapper>