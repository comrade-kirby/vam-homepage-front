<script>
  import PaneNavigation from '$lib/shared/PaneNavigation/PaneNavigation.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from './ScrollContainer.svelte'

  export let minimizedIconText = 'details'
  export let closeUrl, title, subtitle, minimizedLabelText

  let minimized = false
  const show = () => minimized = false
  const minimize = () => minimized = true
</script>

<main class="pointer-events-auto relative z-20 w-full md:flex-initial border-t md:border-t-0 md:border-l border-bprimary/80 {
  minimized 
    ? 'order-first md:order-last h-fit md:w-1/2 md:border-b' 
    : 'order-last flex-1 h-1/2 md:h-full md:w-fit'
}">
  <ContentPane styles="md:w-128" {minimized}>
    <PaneNavigation {minimize} {show} {closeUrl} {title} {subtitle} {minimized} {minimizedIconText} {minimizedLabelText} />
    
    <ScrollContainer {show} {minimized}>
      <slot />
    </ScrollContainer>
  </ContentPane>
</main>
