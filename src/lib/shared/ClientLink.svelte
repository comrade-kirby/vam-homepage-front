<script>
  import { page } from '$app/stores'
  import { forceGraph } from '$lib/stores'
  
  import { Link } from '$lib'

  export let client, isSelected, onClick

  const slug = client.attributes.slug
  const clientUrl = '/clients/' + slug
  const clientDetailsUrl = clientUrl + '/details'
  
  const onHover = () => $forceGraph.onNavHover(clientUrl)

  $: linkToDetails = $page.url.pathname.includes('details')
  $: href = linkToDetails ? clientDetailsUrl : clientUrl
</script>

<Link {href} {onHover} {isSelected} {onClick} text={client.attributes.name} />