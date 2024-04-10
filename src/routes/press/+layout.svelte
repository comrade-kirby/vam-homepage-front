<script>
  import { page } from '$app/stores'

  import PressLink from '$lib/shared/PressLink.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import SelectList from '$lib/shared/SelectList.svelte'

  import ScrollContainer from '$lib/shared/ScrollContainer.svelte';
  
  export let data
  
  $: fullArticleOpen = $page.url.pathname.includes('full-article')
  $: presses = data.presses
</script>

<ContentPane width='w-80'>
  <ScrollContainer>
    <SelectList>
      {#each presses as press}
        <PressLink {press} {fullArticleOpen} />
      {/each}
    </SelectList>
  </ScrollContainer>
</ContentPane>

<slot />