<script>
  export let node
  export let hidden = true
  export let forceGraph   
  export let hoverCallback
  export let openPlayer
  
  const isCollapsable = node.height === 1 
  const isLeaf = node.height === 0
  const bottomMargin = (node.height * 2) || 1
  const leftMargin = node.depth === 1 ? 0 : 4
  
  const handleClick = () => {
    if (isLeaf) {
      console.log('opening player')
      openPlayer()
    } else if (isCollapsable) {
      console.log('toggle collaps')
      hideChildren = !hideChildren
    } else {
      console.log('no action')
    } 
  }

  const multipleChildren = node.children?.length > 1
  const nodeTitle = node.data.title || node.data[0]
  let hideChildren = false

  const navText = node.children
    ? multipleChildren 
      ? nodeTitle
      : `${nodeTitle} | ${node.children[0].data.title}`
    : nodeTitle
</script>

<li class="flex flex-col ml-{leftMargin} mt-2 mb-{bottomMargin}" class:collapse={hidden}>
  <a class="truncate ... w-100"
    on:click={handleClick} 
    on:pointerenter={() => forceGraph.focusNode(node)}
    on:pointerleave={() => forceGraph.clearFocus()}
  >
    {navText}
  </a>
  
  {#if multipleChildren}
    {#each node.children as child}
      <svelte:self node={child} hidden={hideChildren} {forceGraph} {openPlayer} />
    {/each}
  {/if}
</li>