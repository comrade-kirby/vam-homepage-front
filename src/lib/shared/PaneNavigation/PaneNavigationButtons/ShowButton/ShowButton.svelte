<script>
  import ButtonStyles from '$lib/shared/ButtonStyles.svelte'
  
  export let show

  const Html = '&#x25A1;'
</script>

<button on:click={show} class="h-full">
  <ButtonStyles xl>
    <span>{@html Html}</span>
  </ButtonStyles>
</button>