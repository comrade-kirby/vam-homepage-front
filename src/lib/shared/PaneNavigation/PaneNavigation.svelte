<script>
  import PaneNavigationArt from './PaneNavigationArt/PaneNavigationArt.svelte'
  import PaneNavigationSlug from './PaneNavigationSlug/PaneNavigationSlug.svelte'
  import PaneNavigationTitles from './PaneNavigationTitles/PaneNavigationTitles.svelte'
  import PaneNavigationButtons from './PaneNavigationButtons/PaneNavigationButtons.svelte'

  export let title, subtitle, minimize, minimizedLabelText, show, closeUrl, minimizedIconText
  export let {
    minimizedFloating,
    minimizedBottom,
    minimized,
  } = false
</script>

<div class="z-10 w-full p-4 flex flex-col bg-dark border-primary-md" 
  class:border-b={!minimized}
  class:rounded={minimizedFloating}
  class:border={minimizedFloating}
  class:border-t={minimizedBottom}
  class:lg:border={minimizedBottom}
  class:lg:rounded={minimizedBottom}
>
  <div class="flex {title ? 'justify-between' : 'justify-end'} w-full">
    {#if !minimized}
      <PaneNavigationArt onClick={show} display={title} />
    {/if}
    
    {#if minimized}
      <PaneNavigationSlug onClick={show} {minimizedLabelText} {minimizedIconText} />
    {:else}
      <PaneNavigationTitles {title} {subtitle} {minimized} />
    {/if}

    <PaneNavigationButtons {minimize} {show} {closeUrl} />
  </div>
</div>