<script>
  export let title

  const href = '/' + title.toLowerCase()
</script>

<a {href} class="group truncate ... pb-0.5 flex w-100 text-left text-base text-tprimary/90 hover:text-orange-400">
  {title}
</a>