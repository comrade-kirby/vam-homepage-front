<script>
  
  import SectionWrapper from './SectionWrapper.svelte';
  import SelectListItemContainer from './SelectListItemContainer.svelte';
  import SelectListLabel from '$lib/shared/SelectListLabel.svelte'
  import SelectListItem from './SelectListItem.svelte';

  export let collapsable = false
  export let items, containsCurrent, labelText
  
  let expanded = true
  
  $: toggleExpanded = () => expanded = collapsable ? !expanded : true
</script>

<SectionWrapper dependent={items.length}>
  
  <button on:click={toggleExpanded}>
    <SelectListLabel {containsCurrent} {expanded} childCount={items.length}>
      <slot name="label-link">
        {labelText}
      </slot>
    </SelectListLabel>
  </button>
  
  <SelectListItemContainer {expanded}>
    {#each items as item}
      <SelectListItem let:isSelected {item}>
        <slot {item} {isSelected}/>
      </SelectListItem>
    {/each}
  </SelectListItemContainer>
</SectionWrapper>