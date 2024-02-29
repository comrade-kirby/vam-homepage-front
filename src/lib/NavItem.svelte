<script>
  export let node
  export let hidden = true
  export let forceGraph   
  export let hoverCallback
  export let openPlayer
  
  const isCollapsable = node.height === 1 
  const isLeaf = node.height === 0
  
  let hideChildren = isCollapsable

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

  const itemLabel = node.data.title || node.data[0]
</script>

<li class="flex flex-col ml-4" class:collapse={hidden}>
  <a
    on:click={handleClick} 
    on:pointerenter={() => forceGraph.focusNode(node)}
    on:pointerleave={() => forceGraph.clearFocus()}
  >
    {itemLabel}
  </a>
  
  {#if node.children}
    {#each node.children as child}
      <svelte:self node={child} hidden={hideChildren} {forceGraph} {openPlayer} />
    {/each}
  {/if}
</li>