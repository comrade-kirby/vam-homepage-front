<script>
  import PaneNavigation from '$lib/shared/PaneNavigation.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from './ScrollContainer.svelte'
  import PaneHeader from './PaneHeader.svelte'

  export let collapseUrl, heading, subheading, collapse, width = "w-128"
</script>

<ContentPane {width}>
  <PaneNavigation {collapseUrl} back {collapse}/>
  <PaneHeader>{heading}</PaneHeader>
  
  {#if subheading}
    <h2 class="text-xs text-black-olive/60 mb-4 pl-4 tracking-wide">{subheading}</h2>
  {/if}

  <ScrollContainer>
    <slot />
  </ScrollContainer>
</ContentPane>
