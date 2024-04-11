<script>
  import { page } from '$app/stores'

  import Link from './Link.svelte'
  import SelectListItem from './SelectListItem.svelte'
  
  export let press
  export let fullArticleOpen

  const articlePageHref = '/press/' + press.attributes.slug
  const fullArticleHref = articlePageHref + '/full-article'
  const href = fullArticleOpen ? fullArticleHref : articlePageHref
  
  $: isSelected = press.attributes.slug === $page.params.slug
</script>

<SelectListItem {isSelected}>
  <Link {href} text={press.attributes.title} subtext={press.attributes.publication} />
</SelectListItem>