<script>
  import { page } from '$app/stores'

  import Link from './Link.svelte'
  import SelectListItem from './SelectListItem.svelte'
  
  export let press

  const articlePageHref = '/press/' + press.attributes.slug
  const fullArticleHref = articlePageHref + '/full-article'
  
  $: linkToFullArticle = $page.url.pathname.includes('details') || $page.url.pathname.includes('full-article')
  $: href = linkToFullArticle ? fullArticleHref : articlePageHref
  $: inPressNav = $page.url.pathname.includes('press')
  $: isSelected = inPressNav && press.attributes.slug === $page.params.slug
</script>

<SelectListItem {isSelected}>
  <Link {href} text={press.attributes.title} subtext={press.attributes.publication} />
</SelectListItem>