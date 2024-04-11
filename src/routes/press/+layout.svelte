<script>
  import { page } from '$app/stores'

  import PressLink from '$lib/shared/PressLink.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import SelectList from '$lib/shared/SelectList.svelte'

  import ScrollContainer from '$lib/shared/ScrollContainer.svelte';
  
  export let data
  let expanded = true
  
  $: presses = data.presses
</script>

<ContentPane width='w-80'>
  <ScrollContainer>
    <SelectList labelText="all" {expanded} childCount={presses.length}>
      {#each presses as press}
        <PressLink {press} />
      {/each}
    </SelectList>
  </ScrollContainer>
</ContentPane>

<slot />