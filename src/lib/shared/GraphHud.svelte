<script>
  import {
    ButtonStyles,
    BlockQuote,
    PaneNavigation
  } from '$lib'
  
  export let title, subtitle, textBlock, detailsUrl, closeUrl, detailsLinkText = 'details'
</script>

<div class="absolute top-0 pointer-events-auto z-20 top-0 right-0 p-4 md:p-8 w-full h-fit min-w-80 max-w-128">
  <div class="bg-darker/70 backdrop-blur-sm p-4 pl-8 border border-primary-md/80">
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