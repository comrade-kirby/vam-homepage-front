<script>
  export let press

  const href = '/press/' + press.attributes.slug
  const logo = press.attributes.logo.data
  const logoImageUrl = 'http://localhost:1337' + logo.attributes.url
</script>

<a {href} class="flex overflow-visible items-start mt-2 py-2 text-black-olive/80 hover:text-orange-900/80 group">
  <div class="flex self-center w-4 -ml-5 mr-2 text-2xs font-bold text-orange-700/80 invisible group-hover:visible">></div>
  
  <img src={logoImageUrl} class="w-20 relative top-2 object-contain"/>
  <span class="ml-2 line-clamp-2 text-2xs">{press.attributes.title}</span>

</a>