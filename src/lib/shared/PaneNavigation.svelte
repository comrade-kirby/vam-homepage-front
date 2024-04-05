<script>
  import CollapseLeftButton from '$lib/shared/CollapseLeftButton.svelte'
  import BackButton from '$lib/shared/BackButton.svelte'

  export let collapseUrl, back, collapse
</script>

<div class="flex {back ? 'justify-between' : 'justify-end'} h-6 items-center mb-4">
  {#if back}
    <BackButton />
  {/if}
  
  {#if collapse}
    <CollapseLeftButton href={collapseUrl} buttonText="close" />
  {/if}
</div>