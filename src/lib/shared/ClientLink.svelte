<script>
  import { page } from '$app/stores'
  import { forceGraph } from '$lib/stores'
  
  import NavListItem from './NavListItem.svelte'
  import Link from '$lib/shared/Link.svelte'
  
  export let client

  const clientUrl = '/clients/' + client.attributes.slug
  const clientDetailsUrl = clientUrl + '/details'

  const onHover = () => $forceGraph.onNavHover(clientUrl)
  
  $: isSelected = client.attributes.slug === $page.params.slug
  $: linkToDetails = $page.url.pathname.includes('details')
  $: href = linkToDetails ? clientDetailsUrl : clientUrl
</script>

<NavListItem {isSelected} >
  <Link {href} {onHover} text={client.attributes.name} />
</NavListItem>