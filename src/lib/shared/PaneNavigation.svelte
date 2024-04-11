<script>
  import CollapseLeftButton from '$lib/shared/CollapseLeftButton.svelte'

  export let closeUrl, title, subtitle
</script>

<div class="flex flex-col h-fit items-start pb-4">
  <div class="flex justify-between w-full">
    <h1 class="text-base text-black-olive/90 tracking-wider">{title}</h1>  
    <CollapseLeftButton href={closeUrl} buttonText="close" />
  </div>
    
  {#if subtitle}
    <h2 class="text-xs text-black-olive/60 tracking-wide">{subtitle}</h2>
  {/if}
  
</div>