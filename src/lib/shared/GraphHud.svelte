<script>
  import {
    ButtonStyles,
    BlockQuote,
    PaneNavigation
  } from '$lib'
  
  export let title, subtitle, textBlock, detailsUrl, closeUrl, detailsLinkText = 'details'
</script>

<div class="max-w-full lg:min-w-64 lg:max-w-96 h-fit m-2 p-4 pl-8 border border-primary-md/80
  col-start-5 row-start-1 col-span-1 row-span-1
  pointer-events-auto bg-darker/70 backdrop-blur-sm 
">
  <PaneNavigation {title} {subtitle} {closeUrl} />

  {#if textBlock}
    <BlockQuote content={textBlock} />
  {/if}

  {#if detailsUrl}
    <a href={detailsUrl} class="block mt-6">
      <ButtonStyles layout xs outline>
        <span>{detailsLinkText}</span>
      </ButtonStyles>
    </a>
  {/if}
</div>