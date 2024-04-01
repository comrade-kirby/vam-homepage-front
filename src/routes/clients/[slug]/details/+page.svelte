<script>
  import { selected } from '$lib/stores.js'

  import Details from '$lib/shared/DetailsWrapper.svelte'
  import Playlist from '$lib/Playlist/Playlist.svelte'
    import SectionHeader from '$lib/shared/SectionHeader.svelte'

  $: client = $selected.data[0]
  $: clientWorks = $selected.children
</script>

<Details collapseUrl={client.slug} heading={client.name}>
  
  {#if clientWorks}
    <SectionHeader>Works</SectionHeader>
    <Playlist relatedWorks={clientWorks} />
  {/if}
</Details>