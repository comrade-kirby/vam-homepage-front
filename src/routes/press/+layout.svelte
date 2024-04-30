<script>
  import {
    PressLink,
    PageNav,
    SelectList
  } from '$lib'

  export let data
  
  const href="/press"
  const labelText="ALL CLIENTS"
  $: presses = data.presses
</script>

<PageNav let:onClick route="/press">
  <SelectList {labelText} collapsable selectable containsCurrent
    let:isSelected
    let:item={press} 
    items={presses}
  >
    <a slot="label-link" {href} class="w-full" >
      {labelText}
    </a>
    
    <PressLink {press} {isSelected} onClick={onClick} />
  </SelectList>
</PageNav>

<slot />