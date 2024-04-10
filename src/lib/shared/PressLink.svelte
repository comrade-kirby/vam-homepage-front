<script>
  import { page } from '$app/stores'

  import Link from './Link.svelte'
  import NavListItem from './NavListItem.svelte'
  
  export let press
  export let fullArticleOpen

  const articlePageHref = '/press/' + press.attributes.slug
  const fullArticleHref = articlePageHref + '/full-article'
  const href = fullArticleOpen ? fullArticleHref : articlePageHref
  
  $: isSelected = press.attributes.slug === $page.params.slug
</script>

<NavListItem {isSelected}>
  <Link {href} text={press.attributes.title} subtext={press.attributes.publication} />
</NavListItem>