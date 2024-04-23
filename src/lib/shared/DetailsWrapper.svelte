<script>
  import PaneNavigation from '$lib/shared/PaneNavigation/PaneNavigation.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from './ScrollContainer.svelte'

  export let closeUrl, title, subtitle, width = "w-full md:w-128"
  import { retreatRight } from '$lib/stores'

  const show = () => retreatRight.set(false)
  const minimize = () => retreatRight.set(true)
</script>

<div class="absolute h-full right-0 w-full md:w-fit  ">
  <main class="relative h-full max-h-full ml-10 md:ml-0 {$retreatRight && '-right-3/4'}">
    <ContentPane {width}>
      <PaneNavigation {minimize} {show} {closeUrl} {title} {subtitle} />
      
      <ScrollContainer {show}>
        <slot />
      </ScrollContainer>
    </ContentPane>
  </main>
</div>
