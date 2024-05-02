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
  <div class="relative pointer-events-auto
    col-start-2 row-start-3 col-span-11 row-span-1
    lg:p-2 lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:row-span-full lg:pr-1
  ">
    <Minimized {show} {minimizedIconText} {minimizedLabelText} closeUrl={!slug && '/'} />
  </div>
{:else}
  <PageNavContainer minimized={$minimizeNav}>
    <ContentPane pageNav >
      <PaneNavigation {minimize} closeUrl={!slug && '/'} {minimizedLabelText} />
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
{/if}