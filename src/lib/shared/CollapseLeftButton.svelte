<script>
  import ButtonStyles from "./ButtonStyles.svelte";
  
  export let href

  const xHtml = '&#10005;'
</script>

<a {href} class="text-xl max-h-6 text-orange-800/60 self-start hover:text-orange-800/90 tracking-wide">
  <ButtonStyles xl orange>
    <span>{@html xHtml}</span>
  </ButtonStyles>
</a>