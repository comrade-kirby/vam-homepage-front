<script>
  import { page } from '$app/stores'
  import { minimizeNav } from '$lib/stores'

  import { 
    ContentPane,
    PaneNavigation,
    ScrollContainer 
  } from '$lib'
  import PageNavContainer from './PageNavContainer/PageNavContainer.svelte'

  export let route

  const show = () => minimizeNav.set(false)
  const minimize = () => minimizeNav.set(true)
  
  $: slug = $page.params.slug
  $: minimizedLabelText = route
</script>


<PageNavContainer minimized={$minimizeNav}>
  <ContentPane styles="md:w-96 md:pl-16" minimized={$minimizeNav}>
    <PaneNavigation {minimize} {show} minimized={$minimizeNav} closeUrl={!slug && '/'} {minimizedLabelText} minimizedIconText="nav" />
    <ScrollContainer {show} minimized={$minimizeNav}>
      <div class="md:hidden">
        <slot  onClick={minimize} />
      </div>
      <div class="hidden md:block">
        <slot />
      </div>
    </ScrollContainer>
  </ContentPane>
</PageNavContainer>