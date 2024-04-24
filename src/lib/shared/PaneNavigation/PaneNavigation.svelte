<script>
  
  import PaneNavigationArt from './PaneNavigationArt/PaneNavigationArt.svelte'
  import PaneNavigationSlug from './PaneNavigationSlug/PaneNavigationSlug.svelte'
  import PaneNavigationTitles from './PaneNavigationTitles/PaneNavigationTitles.svelte'
  import PaneNavigationButtons from './PaneNavigationButtons/PaneNavigationButtons.svelte'

  export let minimized, title, subtitle, minimize, minimizedLabelText, show, closeUrl, minimizedIconText
</script>

<div class="flex flex-col z-40 h-fit items-start {
  minimized 
    ? 'w-full'
    : title
      ? 'w-full pb-4'
      : 'w-fit self-end -mb-6'
}">
  <div class="flex {title ? 'justify-between' : 'justify-end'} w-full">
    {#if !minimized}
      <PaneNavigationArt onClick={show} display={title} />
    {/if}
    
    {#if minimized}
      <PaneNavigationSlug onClick={show} {minimizedLabelText} {minimizedIconText} />
    {:else}
      <PaneNavigationTitles {title} {subtitle} {minimized} />
    {/if}

    <PaneNavigationButtons {minimize} {closeUrl} />
  </div>
</div>