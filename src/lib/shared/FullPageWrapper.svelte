<script>
  import { minimizeDetails } from '$lib/stores'

  import { 
    ContentPane,
    Minimized,
    PaneNavigation,
    ScrollContainer
  } from '$lib'
  
  export let minimizedIconText = 'details'
  export let closeUrl, title, subtitle, minimizedLabelText

  const show = () => minimizeDetails.set(false)
  const minimize = () => minimizeDetails.set(true)
</script>

{#if $minimizeDetails}
  <div class="relative
      col-start-2 row-start-3 col-span-5 row-span-1
      lg:p-2 lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:row-span-full lg:pr-1
  ">
    <Minimized {show} {minimizedIconText} {minimizedLabelText} closeUrl='/' />
  </div>
{:else}
  <main class="pointer-events-auto border-primary-md/80 overflow-hidden lg:overflow-visible
    col-start-2 row-start-2 col-span-4 row-span-1 border-t lg:border-t-0
    lg:col-start-2 lg:row-start-1 lg:col-span-full lg:row-span-full lg:border-l 
  ">
    <ContentPane wFull>
      <PaneNavigation {minimize} {closeUrl} {title} {subtitle}  />
      
      <ScrollContainer {show}>
        <slot />
      </ScrollContainer>
    </ContentPane>
  </main>
{/if}
