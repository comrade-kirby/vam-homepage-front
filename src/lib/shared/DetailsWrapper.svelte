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
  <div class="col-start-2 row-start-1 col-span-full self-start
    p-2 lg:col-start-4 lg:row-start-1 lg:col-span-1 lg:row-span-1 lg:pl-1
  ">
    <Minimized {show} {closeUrl} {minimizedIconText} {minimizedLabelText} minimized minimizedFloating />
  </div>
{:else}
  <main class="pointer-events-auto overflow-hidden max-w-full 
    border border-primary-md rounded-tl 
    col-start-2 row-start-1 col-span-full row-span-1
    lg:mt-2 lg:border-l lg:border-r-0 lg:border-b-0 lg:overflow-visible
    lg:min-w-60 lg:max-w-128 
    lg:col-start-4 lg:row-start-1 lg:col-span-1 lg:row-span-full 
  ">
    <ContentPane>
      <PaneNavigation {minimize} {closeUrl} {title} {subtitle}  />
      
      <ScrollContainer {show}>
        <slot />
      </ScrollContainer>
    </ContentPane>
  </main>
{/if}
