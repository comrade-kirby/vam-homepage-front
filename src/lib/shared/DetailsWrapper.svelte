<script>
  import CollapseLeftButton from '$lib/shared/CollapseLeftButton.svelte'

  export let collapseUrl, heading, subheading

  const collapseButtonText = '< close'
</script>

<div class="relative flex flex-col h-full w-96 max-h-full overflow-hidden p-4 border-r border-black-olive/10">
  <CollapseLeftButton href={collapseUrl}>{collapseButtonText}</CollapseLeftButton>

  <h1 class="text-base text-black-olive/90 pl-4">{heading}</h1>
  
  {#if subheading}
    <h2 class="text-sm text-black-olive/60 mb-4 pl-4">{subheading}</h2>
  {/if}

  <div class="overflow-scroll pl-4">
    <slot />
  </div>
</div>