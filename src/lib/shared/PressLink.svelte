<script>
  export let press

  const href = '/press/' + press.attributes.slug
  const logo = press.attributes.logo.data
  const logoImageUrl = 'http://localhost:1337' + logo.attributes.url
</script>

<a {href} class="flex items-start mt-2 mb-3 pb-3 pl-2 text-black-olive/80 hover:text-orange-900/80 group border-l-2 border-orange-800/40 hover:border-orange-800/90">
  <img src={logoImageUrl} class="w-20 relative top-2 object-contain"/>
  <span class="ml-2 line-clamp-2 text-2xs">{press.attributes.title}</span>
</a>