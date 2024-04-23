<script>
  import PaneNavigation from '$lib/shared/PaneNavigation/PaneNavigation.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from './ScrollContainer.svelte'

  export let closeUrl, title, subtitle, width = "md:w-128"

  let minimized = false
  const show = () => minimized = false
  const minimize = () => minimized = true
</script>

<main class="relative z-20 w-full md:flex-initial border-t md:border-t-0 md:border-l border-orange-600/80 {
  minimized 
    ? 'order-first md:order-last h-fit md:w-1/2 md:border-b' 
    : 'order-last flex-initial h-1/2 md:h-full md:w-fit'
}">
  <ContentPane {width} {minimized}>
    <PaneNavigation {minimize} {show} {closeUrl} {title} {subtitle} {minimized} minimizedTitle="/details" />
    
    <ScrollContainer {show} {minimized}>
      <slot />
    </ScrollContainer>
  </ContentPane>
</main>
