<script>
  import PaneNavigationArt from './PaneNavigationArt/PaneNavigationArt.svelte'
  import PaneNavigationSlug from './PaneNavigationSlug/PaneNavigationSlug.svelte'
  import PaneNavigationTitles from './PaneNavigationTitles/PaneNavigationTitles.svelte'
  import PaneNavigationButtons from './PaneNavigationButtons/PaneNavigationButtons.svelte'

  export let minimized, title, subtitle, minimize, minimizedLabelText, show, closeUrl, minimizedIconText
</script>

<div class="z-10 w-full h-fit flex flex-col {(!minimized && !title) && 'h-0 lg:h-4'}">
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