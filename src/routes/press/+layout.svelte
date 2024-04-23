<script>
  import PressLink from '$lib/shared/PressLink.svelte'
  import PageNav from '$lib/shared/PageNav/PageNav.svelte'
  import SelectList from '$lib/shared/SelectList.svelte';

  export let data
  
  const href="/press"
  const labelText="ALL CLIENTS"
  $: presses = data.presses
</script>

<PageNav let:minimize>
  <SelectList {labelText} collapsable selectable containsCurrent
    let:isSelected
    let:item={press} 
    items={presses}
  >
    <a slot="label-link" {href} class="w-full" >
      {labelText}
    </a>
    
    <PressLink {press} {isSelected} onClick={minimize} />
  </SelectList>
</PageNav>

<slot />