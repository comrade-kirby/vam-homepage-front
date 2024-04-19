<script>
  import PressLink from '$lib/shared/PressLink.svelte'
  import PageNav from '$lib/shared/PageNav.svelte'
  import CollapsableSelectList from '$lib/shared/CollapsableSelectList.svelte';

  export let data
  
  const href="/press"
  const labelText="ALL CLIENTS"
  $: presses = data.presses
</script>

<PageNav>
  <CollapsableSelectList {labelText} collapsable containsCurrent
    let:isSelected
    let:item={press} 
    items={presses}
  >
    <a slot="label-link" {href} class="w-full" >
      {labelText}
    </a>
    
    <PressLink {press} {isSelected} />
  </CollapsableSelectList>
</PageNav>

<slot />