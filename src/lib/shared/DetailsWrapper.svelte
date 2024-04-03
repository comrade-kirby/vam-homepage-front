<script>
  import CollapseLeftButton from '$lib/shared/CollapseLeftButton.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from './ScrollContainer.svelte'
  import PaneHeader from './PaneHeader.svelte'

  export let collapseUrl, heading, subheading
</script>

<ContentPane width="w-96">
  <CollapseLeftButton href={collapseUrl} buttonText="close" />

  <PaneHeader>{heading}</PaneHeader>
  
  {#if subheading}
    <h2 class="text-xs text-black-olive/60 mb-4 pl-4 tracking-wide">{subheading}</h2>
  {/if}

  <ScrollContainer>
    <slot />
  </ScrollContainer>
</ContentPane>
