<script>
  import CollapseLeftButton from '$lib/shared/CollapseLeftButton.svelte'

  export let closeUrl, collapse, title, subtitle
</script>

<div class="flex justify-between h-fit items-start pb-4">
  <div class="flex flex-col">

    <h1 class="text-base text-black-olive/90 tracking-wider">{title}</h1>  
    
    {#if subtitle}
      <h2 class="text-xs text-black-olive/60 tracking-wide">{subtitle}</h2>
    {/if}
  </div>
  
  {#if collapse}
    <CollapseLeftButton href={closeUrl} buttonText="close" />
  {/if}
</div>