<script>
  import { page } from '$app/stores'
  import { Link } from '$lib'
  
  export let press, isSelected, onClick
  const articlePageHref = '/press/' + press.attributes.slug
  
  $: href = articlePageHref
  $: inPressNav = $page.url.pathname.includes('press')
  $: isSelected = isSelected && inPressNav
</script>

<Link {href} {onClick} text={press.attributes.title} subtext={press.attributes.publication} />