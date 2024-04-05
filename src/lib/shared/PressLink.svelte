<script>
  export let press
  export let fullArticleOpen

  const articlePageHref = '/press/' + press.attributes.slug
  const fullArticleHref = articlePageHref + '/full-article'

  $: href = fullArticleOpen ? fullArticleHref : articlePageHref
</script>

<a {href} class="flex flex-col mt-2 text-black-olive/80 hover:text-orange-900/80 group  ">
  <span class="line-clamp-2 text-2xs">{press.attributes.title}</span>
  <span class="text-3xs text-orange-800/80 group-hover:text-orange-800/95 tracking-wide">{press.attributes.publication}</span>
</a>