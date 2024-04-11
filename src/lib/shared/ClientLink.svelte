<script>
  import { page } from '$app/stores'
  import { forceGraph } from '$lib/stores'
  
  import SelectListItem from './SelectListItem.svelte'
  import Link from '$lib/shared/Link.svelte'
  
  export let client

  const clientUrl = '/clients/' + client.attributes.slug
  const clientDetailsUrl = clientUrl + '/details'

  const onHover = () => $forceGraph.onNavHover(clientUrl)
  
  $: isSelected = client.attributes.slug === $page.params.slug
  $: linkToDetails = $page.url.pathname.includes('details')
  $: href = linkToDetails ? clientDetailsUrl : clientUrl
</script>

<SelectListItem {isSelected} >
  <Link {href} {onHover} text={client.attributes.name} />
</SelectListItem>