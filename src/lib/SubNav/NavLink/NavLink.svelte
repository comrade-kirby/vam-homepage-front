<script>
  import { page } from '$app/stores'
  import { forceGraph } from '$lib/stores'
  import { Link } from '$lib'

  export let node, isSelected, onClick
  const nodeData = node.data[0] || node.data
  const workUrl = nodeData.slug
  const workDetailsUrl = workUrl + '/details'

  const onHover = () => $forceGraph.onNavHover(workUrl)
  
  $: linkToDetails = $page.url.pathname.includes('details')
  $: href = linkToDetails ? workDetailsUrl : workUrl
</script>

<Link {onClick} {href} {onHover} {isSelected} clamp1
  text={nodeData.name} 
  subtext={nodeData.client.name}
/>