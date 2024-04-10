<script>
  import ButtonStyles from "$lib/shared/ButtonStyles.svelte";
  
  export let heading, subheading, detailsHref
</script>

<div class="fixed z-20 top-0 right-0 p-8 w-fit h-fit">
  <div class="bg-blue-100/70 backdrop-blur-sm p-8">
    <h1 class="text-lg font-bold tracking-wide">{heading}</h1>

    {#if subheading}
      <h2 class="mb-2">{subheading}</h2>
    {/if}

    {#if detailsHref}
      <a href={detailsHref} class="pt-4">
        <ButtonStyles orange xs>
          <span class="pt-4">details</span>
        </ButtonStyles>
      </a>
    {/if}
  </div>
</div>