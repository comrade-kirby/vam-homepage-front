<script>
  import HideButton from './HideButton/HideButton.svelte'
  import CloseButton from './CloseButton/CloseButton.svelte'
  import ShowButton from './ShowButton/ShowButton.svelte'

  export let minimized, minimize, show, closeUrl
</script>

<div class="flex ml-6 max-h-6 space-x-4 items-center">
  {#if minimize}
    {#if minimized}
      <ShowButton {show} />
    {:else}
      <HideButton {minimize} />
    {/if}
  {/if}
  {#if closeUrl}
    <CloseButton href={closeUrl} />
  {/if}
</div>
