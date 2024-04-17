<script>
  import PaneNavigation from '$lib/shared/PaneNavigation.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from './ScrollContainer.svelte'

  export let closeUrl, title, subtitle, width = "w-128"
</script>

<div class="absolute right-0 h-full max-h-full">

  <ContentPane {width}>
    <PaneNavigation {title} {subtitle} {closeUrl} />
    
    <ScrollContainer>
      <slot />
    </ScrollContainer>
  </ContentPane>
</div>
