<script>
  import HideButton from './HideButton/HideButton.svelte'
  import CloseButton from './CloseButton/CloseButton.svelte'
  import ShowButton from './ShowButton/ShowButton.svelte'

  export let minimize, show, closeUrl
</script>

<div class="flex ml-6 max-h-6 space-x-4 items-center">
    {#if show}
      <ShowButton {show} />
    {/if}
    {#if minimize}
      <HideButton {minimize} />
    {/if}
  {#if closeUrl}
    <CloseButton href={closeUrl} />
  {/if}
</div>
