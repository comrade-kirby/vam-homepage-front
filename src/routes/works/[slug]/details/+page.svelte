<script>
  import { root } from '$lib/stores.js'
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import SectionWrapper from '$lib/shared/SectionWrapper.svelte'
  import PressLink from '$lib/shared/PressLink.svelte'
  import ClampParagraph from '$lib/shared/ClampParagraph.svelte'
  import DetailsWrapper from '$lib/shared/DetailsWrapper.svelte'
  import SectionLabel from '$lib/shared/SectionLabel.svelte'
  import PlaylistItem from '$lib/shared/PlaylistItem.svelte';
  import SelectList from '$lib/shared/SelectList.svelte';

  export let data
  
  $: work = data?.work?.data
  $: slug = '/works/' + work?.attributes.slug
  $: title = work.attributes.title
  $: client = work?.attributes.client.data
  $: subtitle = client.attributes.name
  $: presses = work?.attributes.presses
  $: relatedWorks = work && buildRelatedWorksList($root, slug)
</script>

{#if work}
  <DetailsWrapper closeUrl={slug} {title} {subtitle}>
    <SectionWrapper dependent={work.attributes.description}>
      <ClampParagraph content={work.attributes.description} />
    </SectionWrapper>
    
    <SelectList collapsable containsCurrent
      let:isSelected
      let:item={press}
      labelText="press" 
      items={presses}
    >
      
      <PressLink {press} {isSelected} />
    </SelectList>

    <SelectList collapsable selectable containsCurrent
      let:isSelected
      let:item={node}
      labelText="related work"
      items={relatedWorks}
    >
      <PlaylistItem {node} {isSelected} />
    </SelectList>
  
    <SectionWrapper dependent={work.attributes.credits}>
      <SectionLabel>credits</SectionLabel>
      <ClampParagraph content={work.attributes.credits} short />
    </SectionWrapper>
  </DetailsWrapper>
{/if}