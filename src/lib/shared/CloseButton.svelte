<script>
  import ButtonStyles from './ButtonStyles.svelte'
  
  export let href

  const xHtml = '&#10005;'
</script>

<a {href}  class="h-full">
  <ButtonStyles xl>
    <span>{@html xHtml}</span>
  </ButtonStyles>
</a>