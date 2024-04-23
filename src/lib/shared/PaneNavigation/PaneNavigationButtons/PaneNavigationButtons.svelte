<script>
  import HideButton from '$lib/shared/HideButton.svelte'
  import CloseButton from '$lib/shared/CloseButton.svelte'

  export let minimize, closeUrl
</script>

<div class="flex ml-6 max-h-6 space-x-4 items-center">
  {#if minimize}
    <HideButton {minimize}/>
  {/if}
  {#if closeUrl}
    <CloseButton href={closeUrl} />
  {/if}
</div>
