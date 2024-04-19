<script>
  import ButtonStyles from "./ButtonStyles.svelte";
  
  export let hide

  const Html = '&#95;'
</script>

<button on:click={hide} class="h-full">
  <ButtonStyles xl>
    <span>{@html Html}</span>
  </ButtonStyles>
</button>