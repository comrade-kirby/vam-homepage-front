<script>
  import HideButton from '$lib/shared/HideButton.svelte'
  import CollapseLeftButton from '$lib/shared/CollapseLeftButton.svelte'

  export let title, subtitle, hide, show, closeUrl
</script>

<div class="flex self-end flex-col h-fit items-start pb-4">
  <div class="flex justify-between w-full">
    {#if title}
      <h1 on:click={show} class="text-base grow text-tprimary tracking-wider z-30">
        {title}
      </h1>  
    {/if}

    <div class="flex ml-6 max-h-6 space-x-4 items-center">
      {#if hide}
        <HideButton {hide}/>
      {/if}
      {#if closeUrl}
        <CollapseLeftButton href={closeUrl} />
      {/if}
    </div>

    {#if title}
      <div on:click={show} class="absolute -left-6 top-2 size-16 rounded-full backdrop-blur-sm bg-gradient-to-br to-black  from-tprimary/80 via-tsecondary/70"></div>
      {/if}
  </div>
    
  {#if subtitle}
    <h2 class="z-30 text-xs text-orange-500/70 tracking-wide">{subtitle}</h2>
  {/if}
  
</div>