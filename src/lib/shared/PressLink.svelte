<script>
  import { page } from '$app/stores'

  import Link from './Link.svelte'
  
  export let press, isSelected, onClick

  const articlePageHref = '/press/' + press.attributes.slug
  const fullArticleHref = articlePageHref + '/full-article'
  
  $: linkToFullArticle = $page.url.pathname.includes('details') || $page.url.pathname.includes('full-article')
  $: href = linkToFullArticle ? fullArticleHref : articlePageHref
  $: inPressNav = $page.url.pathname.includes('press')
  $: isSelected = isSelected && inPressNav
</script>

<Link {href} {onClick} text={press.attributes.title} subtext={press.attributes.publication} />