<script>
  import {
    PressLink,
    PageNav,
    SelectList
  } from '$lib'

  export let data
  
  const href="/press"
  const labelText="ALL"
  $: presses = data.presses
</script>

<PageNav let:onClick route="/press">
  <SelectList {labelText} collapsable selectable containsCurrent
    let:isSelected
    items={presses}
  >
    <a slot="label-link" {href} class="w-full" >
      {labelText}
    </a>
    
    {#each presses as press}
      <PressLink {press} {isSelected} onClick={onClick} />
    {/each}
  </SelectList>
</PageNav>

<slot />