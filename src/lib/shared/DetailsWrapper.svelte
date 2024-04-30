<script>
  import { 
    ContentPane,
    PaneNavigation,
    ScrollContainer
  } from '$lib'
  
  export let minimized = false
  export let minimizedIconText = 'details'
  export let closeUrl, title, subtitle, minimizedLabelText

  const show = () => minimized = false
  const minimize = () => minimized = true
</script>

<main class="flex pointer-events-auto relative z-20 border-t md:border-t-0 md:border-l border-primary-md/80 {
  minimized 
    ? 'w-full h-fit md:border-b' 
    : 'flex-auto md:flex-initial h-1/2 md:max-w-full md:h-full'
}">
  <ContentPane styles="md:w-128" {minimized}>
    <PaneNavigation {minimize} {show} {closeUrl} {title} {subtitle} {minimized} {minimizedIconText} {minimizedLabelText} />
    
    <ScrollContainer {show} {minimized}>
      <slot />
    </ScrollContainer>
  </ContentPane>
</main>
