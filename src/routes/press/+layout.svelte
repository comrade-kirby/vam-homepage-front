<script>
  import { page } from '$app/stores'

  import PressLink from '$lib/shared/PressLink.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import PressItem from '$lib/PressItem/PressItem.svelte'
  import ScrollContainer from '$lib/shared/ScrollContainer.svelte';
  import PaneHeader from '$lib/shared/PaneHeader.svelte';
  
  export let data
  
  $: pressPaneOpen = $page.params.slug
  $: fullArticleOpen = $page.url.pathname.includes('full-article')
  $: contentOpen = pressPaneOpen || fullArticleOpen
  $: presses = data.presses
</script>

<ContentPane width={contentOpen && 'max-w-64'}>
  <PaneHeader>Press</PaneHeader>

  <ScrollContainer>
    <div class={contentOpen ? 'flex flex-col' : "grid grid-cols-3 gap-4 mt-8"}>
      {#each presses as press}
        {#if contentOpen}
          <PressLink {press} {fullArticleOpen} />
        {:else}
          <PressItem {press} />
        {/if}
      {/each}
    </div>
  </ScrollContainer>
</ContentPane>

<slot />