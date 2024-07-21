<script>
  import { page } from '$app/stores'
  import { forceGraph } from '$lib/stores'
  import { Link } from '$lib'

  export let node, isSelected, onClick
  export let childCount = null
  export let large = false
  const nodeData = node.data[0] || node.data
  const workUrl = nodeData.slug
  const text = `${nodeData.name}`

  const onHover = () => $forceGraph?.onNavHover(workUrl)
  
  $: href = workUrl
</script>

<Link {onClick} {href} {onHover} {isSelected} {large} clamp1
  {text} 
/>