<script>
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import PressItem from '$lib/PressItem/PressItem.svelte'
  import ScrollContainer from '$lib/shared/ScrollContainer.svelte';
  import PaneHeader from '$lib/shared/PaneHeader.svelte';
  
  export let data

  $: presses = data.presses
</script>

<ContentPane>
  <PaneHeader>Press</PaneHeader>
  <ScrollContainer>
    <div class="grid grid-cols-3 gap-4 mt-8">
      {#each presses as press}
        <PressItem {press} />
      {/each}
    </div>
  </ScrollContainer>
</ContentPane>