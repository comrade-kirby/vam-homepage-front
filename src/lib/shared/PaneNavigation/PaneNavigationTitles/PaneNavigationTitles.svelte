<script>
  export let title, subtitle
</script>

{#if title}
  <div class="flex min-h-10 flex-col w-full items-start z-30">
    <h1 class="text-xs md:text-base text-white tracking-wider line-clamp-2">
      {title}
    </h1>  
    
    {#if subtitle}
      <h2 class="text-2xs md:text-xs text-orange-500/70 tracking-wide">
        {subtitle}
      </h2>
    {/if}
  </div>
{/if}