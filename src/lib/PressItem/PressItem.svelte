<script>
  export let press

  const pressImageUrl =  'http://localhost:1337' + press.attributes.thumbnail.data.attributes.url
  const href = '/press/' + press.attributes.slug
</script>

<a {href} class="flex flex-col group">
  <p class="text-xs font-medium text-tprimary/80 group-hover:text-orange-900/80 tracking-wide">{press.attributes.publication}</p>
  <img src={pressImageUrl} class="flex grow aspect-square object-cover"/>
</a>