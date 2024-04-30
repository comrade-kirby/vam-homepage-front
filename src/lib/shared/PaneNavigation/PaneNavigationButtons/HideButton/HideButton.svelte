<script>
  import { ButtonStyles } from '$lib'
  
  export let minimize

  const Html = '&#95;'
</script>

<button on:click={minimize} class="h-full">
  <ButtonStyles xl>
    <span>{@html Html}</span>
  </ButtonStyles>
</button>