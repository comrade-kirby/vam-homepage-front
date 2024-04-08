<script>
  import Details from '$lib/shared/DetailsWrapper.svelte'
  import Playlist from '$lib/Playlist/Playlist.svelte'
  import SectionHeader from '$lib/shared/SectionHeader.svelte'
  import PressLink from '$lib/shared/PressLink.svelte'

  export let data
  
  $: client = data.client.attributes
  $: collapseUrl = '/clients/'
  $: works = client.works.data
  $: presses = client.presses.data
</script>

<Details collapse {collapseUrl} heading={client.name}>
  
  {#if works.length > 0}
    <SectionHeader>Works</SectionHeader>
    <Playlist relatedWorks={works} />
  {/if}

  {#if presses.length > 0}
    <SectionHeader>Press</SectionHeader>
    {#each presses as press}
      <PressLink {press} />
    {/each}
  {/if}
</Details>