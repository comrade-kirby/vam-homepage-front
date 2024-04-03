<script>
  export let href, buttonText

  const leftArrowHtml = '&#8592;'
</script>

<a {href} class="self-end mb-4 text-xs text-orange-800/60 hover:text-orange-800/90 tracking-wide">
  <span>{@html leftArrowHtml} {buttonText}</span>
</a>