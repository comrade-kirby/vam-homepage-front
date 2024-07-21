<script>
  import { page } from '$app/stores'
  import { minimizeNav } from '$lib/stores'

  import { 
    ContentPane,
    Minimized,
    PaneNavigation,
    ScrollContainer 
  } from '$lib'
  import PageNavContainer from './PageNavContainer/PageNavContainer.svelte'

  export let route

  const minimizedIconText = 'nav'

  const show = () => minimizeNav.set(false)
  const minimize = () => minimizeNav.set(true)
  
  $: slug = $page.params.slug
  $: minimizedLabelText = route
</script>

{#if $minimizeNav}
  <div class="
    col-start-2 row-start-3 col-span-full row-span-1 
     lg:p-2 lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-full lg:pr-1
  ">
    <Minimized {show} {minimizedIconText} {minimizedLabelText} 
      closeUrl={!slug && '/'} 
      minimized minimizedBottom />
  </div>
{:else}
  <PageNavContainer minimized={$minimizeNav}>
    <ContentPane>
      <PaneNavigation {minimize} closeUrl={!slug && '/'} {minimizedLabelText} />
      <ScrollContainer {show} minimized={$minimizeNav}>
          <slot />
      </ScrollContainer>
    </ContentPane>
  </PageNavContainer>
{/if}