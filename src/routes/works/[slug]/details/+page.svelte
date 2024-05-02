<script>
  import { root } from '$lib/stores.js'
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import {
    SectionWrapper,
    PressLink,
    ClampParagraph,
    DetailsWrapper,
    GraphControls,
    SectionLabel,
    PlaylistItem,
    SelectList
  } from '$lib'

  export let data

  let minimized = false

  $: work = data?.work?.data
  $: slug = '/' + work?.attributes.slug
  $: closeUrl ='/works' + slug 
  $: title = work.attributes.title
  $: client = work?.attributes.client.data
  $: subtitle = client.attributes.name
  $: presses = work?.attributes.presses
  $: relatedWorks = work && buildRelatedWorksList($root, closeUrl)
</script>



{#if work}
  <DetailsWrapper bind:minimized {closeUrl} {title} {subtitle} minimizedLabelText={slug}>
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

<GraphControls position={
  minimized 
    ? 'col-start-5 row-end-2 col-span-1 lg:row-start-3'
    : 'col-start-4 col-span-2 row-start-1 lg:col-start-3 lg:row-start-3'
} />