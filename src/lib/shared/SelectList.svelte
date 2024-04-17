<script>
  import SelectListLabel from './SelectListLabel.svelte'

  export let labelText, childCount
  export let containsCurrent = true
  export let collapsable = true
  export let onClick

  let expanded = true
  $: toggleExpanded = () => {
    if (collapsable) expanded = !expanded
    onClick()
  }
</script>

<button on:click={toggleExpanded} class="w-full">
  <SelectListLabel {containsCurrent} {expanded} {childCount}>
    {labelText}
  </SelectListLabel>
</button>

{#if expanded}
  <ul role="list" class="border-l border-black-olive/10 pl-1 ml-0.5 mb-6">
    <slot />
  </ul>
{/if}