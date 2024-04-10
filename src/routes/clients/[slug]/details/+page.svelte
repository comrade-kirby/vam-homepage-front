<script>
  import Playlist from '$lib/Playlist/Playlist.svelte'
  import SectionHeader from '$lib/shared/SectionHeader.svelte'
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
    <SectionHeader>Works</SectionHeader>
    <Playlist relatedWorks={works} />
  {/if}

  {#if presses.length > 0}
    <SectionHeader>Press</SectionHeader>
    {#each presses as press}
      <MenuLink {press} />
    {/each}
  {/if}
</DetailsWrapper>