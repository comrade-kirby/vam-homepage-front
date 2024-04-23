<script>
  import { page } from '$app/stores'
  import { minimizeNav } from '$lib/stores'

  import PageNavContainer from './PageNavContainer/PageNavContainer.svelte'
  import PaneNavigation from '$lib/shared/PaneNavigation/PaneNavigation.svelte'
  import ContentPane from '../ContentPane.svelte';
  import ScrollContainer from '../ScrollContainer.svelte';

  export let route

  const show = () => minimizeNav.set(false)
  const minimize = () => minimizeNav.set(true)
  
  $: slug = $page.params.slug
  $: minimizedTitle = slug ? route + '/' + slug : route
</script>


<PageNavContainer minimized={$minimizeNav}>
  <ContentPane width="md:w-96" minimized={$minimizeNav}>
    <PaneNavigation {minimize} {show} minimized={$minimizeNav} closeUrl={!slug && '/'} {minimizedTitle} />
    <ScrollContainer {show} minimized={$minimizeNav}>
      <slot />
    </ScrollContainer>
  </ContentPane>
</PageNavContainer>