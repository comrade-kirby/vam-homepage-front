<script>
  import ButtonStyles from '$lib/shared/ButtonStyles.svelte'
  import BlockQuote from '$lib/shared/BlockQuote.svelte'
  import PaneNavigation from '$lib/shared/PaneNavigation.svelte';
  
  export let title, subtitle, textBlock, detailsUrl, closeUrl, detailsLinkText = 'details'
</script>

<div class="fixed z-20 top-0 right-0 p-8 w-fit h-fit min-w-80 max-w-128">
  <div class="bg-bg-darkest/70 backdrop-blur-sm p-4">
    <PaneNavigation {title} {subtitle} {closeUrl} />

    {#if textBlock}
      <BlockQuote content={textBlock} />
    {/if}

    {#if detailsUrl}
      <a href={detailsUrl} class="block mt-6">
        <ButtonStyles xs outline>
          <span>{detailsLinkText}</span>
        </ButtonStyles>
      </a>
    {/if}
  </div>
</div>