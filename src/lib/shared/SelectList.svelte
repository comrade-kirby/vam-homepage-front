<script>
  import {
    SectionWrapper,
    SelectListItemContainer,
    SelectListLabel,
    SelectListItem
  } from '$lib'

  export let collapsable = false
  export let selectable = false
  export let items, containsCurrent, labelText
  
  let expanded = true
  
  $: toggleExpanded = () => expanded = collapsable ? !expanded : true
</script>

<SectionWrapper dependent={items.length}>
  <button on:click={toggleExpanded} class="max-w-full relative">
    <SelectListLabel {containsCurrent} {expanded} childCount={items.length}>
      <slot name="label-link">
        {labelText}
      </slot>
    </SelectListLabel>
  </button>
  
  <SelectListItemContainer {expanded}>
    {#each items as item}
      <SelectListItem let:isSelected {item} {selectable}>
        <slot {item} {isSelected}/>
      </SelectListItem>
    {/each}
  </SelectListItemContainer>
</SectionWrapper>