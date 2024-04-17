<script>
  import PressLink from '$lib/shared/PressLink.svelte'
  import PageNav from '$lib/shared/PageNav.svelte'
  import SelectList from '$lib/shared/SelectList.svelte'

  export let data
  
  let expanded = true
  
  $: presses = data.presses
</script>

<PageNav>
  <SelectList wideMargin labelText="ALL PRESS" {expanded} childCount={presses.length}>
    {#each presses as press}
      <PressLink {press} />
    {/each}
  </SelectList>
</PageNav>

<slot />