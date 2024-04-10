<script>
  import { page } from '$app/stores'
  import { selected, forceGraph } from '$lib/stores'

  import NavListItem from '$lib/shared/NavListItem.svelte'
  import Link from '$lib/shared/Link.svelte'

  export let node
  
  const nodeData = node.data[0] || node.data
  const workUrl = nodeData.slug
  const workDetailsUrl = workUrl + '/details'

  const onHover = () => $forceGraph.onNavHover(workUrl)
  
  $: selectedData = $selected?.data[0] || $selected?.data
  $: isSelected = href === selectedData?.slug
  $: linkToDetails = $page.url.pathname.includes('details')
  $: href = linkToDetails ? workDetailsUrl : workUrl

</script>

<NavListItem {isSelected} >
  <Link {href} {onHover} text={nodeData.name} subtext={nodeData.client.name} clamp1 />
</NavListItem>