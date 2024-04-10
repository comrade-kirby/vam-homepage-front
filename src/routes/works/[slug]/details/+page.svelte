<script>
  import { root } from '$lib/stores.js'
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import PressLink from '$lib/shared/PressLink.svelte'
  import ClampParagraph from '$lib/shared/ClampParagraph.svelte'
  import Playlist from '$lib/Playlist/Playlist.svelte'
  import DetailsWrapper from '$lib/shared/DetailsWrapper.svelte'
  import SectionHeader from '$lib/shared/SectionHeader.svelte'

  export let data
  
  $: work = data?.work?.data
  $: slug = '/works/' + work?.attributes.slug
  $: title = work.attributes.title
  $: client = work?.attributes.client.data
  $: subtitle = client.attributes.name
  $: presses = work?.attributes.presses.data
  $: relatedWorks = work && buildRelatedWorksList($root, slug)
</script>

{#if work}
  <DetailsWrapper collapse closeUrl={slug} {title} {subtitle}>
    {#if work.attributes.description}
      <ClampParagraph content={work.attributes.description} />
    {/if}
    
    {#if presses.length > 0}
      <SectionHeader>Press</SectionHeader>
      {#each presses as press}
        <PressLink {press} />
      {/each}
    {/if}
    
    {#if relatedWorks}
      <SectionHeader>Related Works</SectionHeader>
      <Playlist {relatedWorks} />
    {/if}
    
    {#if work.attributes.credits}
      <SectionHeader>Credits</SectionHeader>
      <ClampParagraph content={work.attributes.credits} short />
    {/if}
  </DetailsWrapper>
{/if}