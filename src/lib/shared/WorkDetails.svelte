<script>
  import { root } from '$lib/stores.js'
  import { buildRelatedWorksList } from '$lib/helpers.js'

  import {
    SectionWrapper,
    PressLink,
    ClampParagraph,
    SelectListItem,
    SectionLabel,
    PlaylistItem,
    SelectList
  } from '$lib'

  export let work, slug
  
  $: presses = work?.attributes.presses
  $: relatedWorks = work && buildRelatedWorksList($root, `/works/${slug}`)
</script>

<SectionWrapper dependent={work.attributes.description}>
  <ClampParagraph content={work.attributes.description} />
</SectionWrapper>

<SelectList collapsable containsCurrent
  let:isSelected
  labelText="press" 
  items={presses}
>
  {#each presses as press}
    <SelectListItem item={press}>
      <PressLink {press} {isSelected} />
    </SelectListItem>
  {/each}
</SelectList>

<SelectList collapsable selectable containsCurrent
  let:isSelected
  labelText="related work"
  items={relatedWorks}
>
  {#each relatedWorks as node}
    <SelectListItem item={node} selectable>
      <PlaylistItem {node} {isSelected} />
    </SelectListItem>
  {/each}
</SelectList>

<SectionWrapper dependent={work.attributes.credits} end>
  <SectionLabel>credits</SectionLabel>
  <ClampParagraph content={work.attributes.credits} short />
</SectionWrapper>