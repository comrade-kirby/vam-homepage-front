<script>
  import { selected, awaitingSelection } from '$lib/stores.js'
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import ClampParagraph from '$lib/shared/ClampParagraph.svelte'
  import Playlist from '$lib/Playlist/Playlist.svelte'
  import Details from '$lib/shared/DetailsWrapper.svelte'
  import SectionHeader from '$lib/shared/SectionHeader.svelte'

  $: work = $selected.data
  $: client = work.client
  $: relatedWorks = buildRelatedWorksList($selected)
</script>

{#if !$awaitingSelection}
  <Details collapseUrl={work.slug} heading={work.name} subheading={client.name}>
    {#if work.attributes.description}
      <ClampParagraph content={work.attributes.description} />
    {/if}
    
    {#if work.attributes.credits}
      <SectionHeader>Credits</SectionHeader>
      <ClampParagraph content={work.attributes.credits} short />
    {/if}
    
    {#if relatedWorks}
      <SectionHeader>Related Works</SectionHeader>
      <Playlist {relatedWorks} />
    {/if}
  </Details>
{/if}