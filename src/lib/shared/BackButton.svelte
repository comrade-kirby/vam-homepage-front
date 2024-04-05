<script>
  import ButtonStyles from "./ButtonStyles.svelte";

  const leftArrowHtml = '&#8592;'
  const onClick = () => window.history.back()
</script>

<button on:click={onClick} class="self-end">
  <ButtonStyles orange xs>
    <span>{@html leftArrowHtml} back</span>
  </ButtonStyles>
</button>