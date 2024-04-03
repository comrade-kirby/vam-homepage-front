<script>
  import CollapseLeftButton from '$lib/shared/CollapseLeftButton.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'

  export let collapseUrl, heading, subheading
</script>

<ContentPane width="w-96">
  <CollapseLeftButton href={collapseUrl} buttonText="close" />

  <h1 class="text-base text-black-olive/90 pl-4 tracking-widest">{heading}</h1>
  
  {#if subheading}
    <h2 class="text-xs text-black-olive/60 mb-4 pl-4 tracking-wide">{subheading}</h2>
  {/if}

  <div class="overflow-y-scroll -mx-4 px-4">
    <div class="overflow-x-visible pl-4">
      <slot />
    </div>
  </div>
</ContentPane>
