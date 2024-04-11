<script>
  import { root } from '$lib/stores.js'
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import PressLink from '$lib/shared/PressLink.svelte'
  import ClampParagraph from '$lib/shared/ClampParagraph.svelte'
  import DetailsWrapper from '$lib/shared/DetailsWrapper.svelte'
  import SectionLabel from '$lib/shared/SectionLabel.svelte'
  import SelectList from '$lib/shared/SelectList.svelte';
  import PlaylistItem from '$lib/shared/PlaylistItem.svelte';

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
      <SelectList labelText="press" childCount={presses.length}>
        {#each presses as press}
          <PressLink {press} />
        {/each}
      </SelectList>
    {/if}
    
    {#if relatedWorks}
      <SelectList labelText="related work" childCount={relatedWorks.length}>
        {#each relatedWorks as work}
          <PlaylistItem  node={work} />
        {/each}
      </SelectList>
    {/if}
    
    {#if work.attributes.credits}
      <SectionLabel>credits</SectionLabel>
      <ClampParagraph content={work.attributes.credits} short />
    {/if}
  </DetailsWrapper>
{/if}