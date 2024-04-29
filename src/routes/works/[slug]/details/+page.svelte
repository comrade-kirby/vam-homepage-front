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
  import GraphControls from '$lib/shared/GraphControls/GraphControls.svelte'

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

<div class="md:w-1/2 h-1/2 z-20 flex flex-col md:flex-row justify-end {
  minimized 
    ? 'h-fit flex-col md:h-full md:flex-col-reverse md:justify-between'
    : 'flex-auto md:flex-initial h-1/2 md:max-w-full md:h-full'
}">
  <GraphControls offset="-mt-48 md:mt-0 -ml-24" />

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
</div>