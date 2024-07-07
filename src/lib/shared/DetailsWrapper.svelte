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
  <div class="col-start-2 row-start-2 col-span-full
      lg:p-2 lg:col-start-3 lg:row-start-1 lg:col-span-3 lg:row-span-1 lg:pl-1
  ">
    <Minimized {show} {closeUrl} {minimizedIconText} {minimizedLabelText} />
  </div>
{:else}
  <main class="pointer-events-auto border-primary-md/80 overflow-hidden lg:overflow-visible
    col-start-2 row-start-2 col-span-4 row-span-1 border-t lg:border-t-0
    lg:max-w-128 lg:col-start-4 lg:row-start-1 lg:col-span-1 lg:row-span-full lg:border-l 
  ">
    <ContentPane>
      <PaneNavigation {minimize} {closeUrl} {title} {subtitle}  />
      
      <ScrollContainer {show}>
        <slot />
      </ScrollContainer>
    </ContentPane>
  </main>
{/if}
