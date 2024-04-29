<script>
  import ButtonStyles from '$lib/shared/ButtonStyles.svelte'
  
  export let href

  const xHtml = '&#10005;'
</script>

<a {href}  class="h-full">
  <ButtonStyles xl>
    <span>{@html xHtml}</span>
  </ButtonStyles>
</a>