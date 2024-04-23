<script>
  import { page } from '$app/stores'
  import { minimizeNav } from '$lib/stores'

  import PageNavContainer from './PageNavContainer/PageNavContainer.svelte'
  import PaneNavigation from '$lib/shared/PaneNavigation/PaneNavigation.svelte'
  import ContentPane from '../ContentPane.svelte';
  import ScrollContainer from '../ScrollContainer.svelte';

  const show = () => minimizeNav.set(false)
  const minimize = () => minimizeNav.set(true)
  
  $: contentOpen = pathname.includes('details')
  $: contentOpen && minimize()
  $: slug = $page.params.slug
  $: pathname = $page.url.pathname
</script>


<PageNavContainer minimized={$minimizeNav}>
  <ContentPane width="w-full md:w-96" minimized={$minimizeNav}>
    <PaneNavigation {minimize} {show} minimized={$minimizeNav} closeUrl={!slug && '/'} />
    <ScrollContainer {show} minimized={$minimizeNav}>
      <div class="hidden md:block">
        <slot />
      </div>

      <!-- mobile only: minimize on click -->
      <div class="block md:hidden">
        <slot {minimize} />
      </div>
    </ScrollContainer>
  </ContentPane>
</PageNavContainer>