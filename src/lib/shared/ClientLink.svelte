<script>
  import { page } from '$app/stores'
  import { forceGraph } from '$lib/stores'
  
  import { Link } from '$lib'

  export let client, isSelected, onClick

  const slug = client.attributes.slug
  const clientUrl = '/clients/' + slug
  
  const onHover = () => $forceGraph.onNavHover(clientUrl)

  $: href = clientUrl
</script>

<Link {href} {onHover} {isSelected} {onClick} text={client.attributes.name} />