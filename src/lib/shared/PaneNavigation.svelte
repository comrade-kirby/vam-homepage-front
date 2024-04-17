<script>
  import CollapseLeftButton from '$lib/shared/CollapseLeftButton.svelte'

  export let closeUrl, title, subtitle
</script>

<div class="flex flex-col h-fit items-start pb-4">
  <div class="flex justify-between w-full">
    <h1 class="text-base text-tprimary tracking-wider z-30">{title}</h1>  
    <CollapseLeftButton href={closeUrl} buttonText="close" />
    <div class="absolute -left-6 top-2 size-16 rounded-full backdrop-blur-sm bg-gradient-to-br to-black  from-tprimary/80 via-tsecondary/70"></div>
  </div>
    
  {#if subtitle}
    <h2 class="z-30 text-xs text-orange-500/70 tracking-wide">{subtitle}</h2>
  {/if}
  
</div>