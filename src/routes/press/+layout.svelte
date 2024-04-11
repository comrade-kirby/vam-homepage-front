<script>
  import { page } from '$app/stores'

  import SelectListLabel from '$lib/shared/SelectListLabel.svelte'
  import PressLink from '$lib/shared/PressLink.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import SelectList from '$lib/shared/SelectList.svelte'

  import ScrollContainer from '$lib/shared/ScrollContainer.svelte';
  
  export let data
  let expanded = true
  
  $: fullArticleOpen = $page.url.pathname.includes('full-article')
  $: presses = data.presses
</script>

<ContentPane width='w-80'>
  <ScrollContainer>
    <button on:click={() => expanded = !expanded}>
      <SelectListLabel containsCurrent=true {expanded} childCount={presses.length}>
        all
      </SelectListLabel>
    </button>
    {#if expanded}
      <SelectList>
        {#each presses as press}
          <PressLink {press} {fullArticleOpen} />
        {/each}
      </SelectList>
    {/if}
  </ScrollContainer>
</ContentPane>

<slot />