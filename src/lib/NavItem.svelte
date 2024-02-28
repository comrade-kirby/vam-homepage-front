<script>
  export let node
  export let hidden = true
  export let forceGraph   
  export let hoverCallback
  
  const collapsable = node.depth > 1
  let hideChildren = collapsable
  
  const toggleOpen = () => { 
    hideChildren = collapsable 
      ? !hideChildren 
      : false
  }

  const itemLabel = node.data.attributes
    ? node.data.attributes.title
    : node.data[0]
</script>

<li class="flex flex-col ml-4" class:collapse={hidden}>
  <a
    on:click={() => toggleOpen(node)} 
    on:pointerenter={() => forceGraph.focusNode(node)}
    on:pointerleave={() => forceGraph.clearFocus()}
  >
    {itemLabel}
  </a>
  
  {#if node.children}
    {#each node.children as child}
      <svelte:self node={child} hidden={hideChildren} {forceGraph} />
    {/each}
  {/if}
</li>