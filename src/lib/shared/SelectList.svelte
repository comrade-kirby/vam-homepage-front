<script>
  import {
    SectionWrapper,
    SelectListItemContainer,
    SelectListLabel,
  } from '$lib'

  export let node = null
  export let href = null
  export let containsCurrent = false
  export let collapsable = false
  export let small = false
  export let labelText = false
  export let isSelected = false
  export let items
  export let expanded = true

  const depth = node && node.depth
  $: toggleExpanded = () => expanded = collapsable ? !expanded : true
</script>

<SectionWrapper dependent={items.length} {depth} {isSelected}>
  <button on:click={toggleExpanded} class="max-w-full relative">
    <a {href} class="w-full max-w-full truncate ..." >
      <SelectListLabel {containsCurrent} {node} {small} {expanded} {isSelected} {labelText} childCount={items.length} />
    </a>
  </button>
  
  <SelectListItemContainer {expanded}>
    <slot />
  </SelectListItemContainer>
</SectionWrapper>