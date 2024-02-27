<script>
  export let node
  export let hidden = true
  export let selectCallback
  export let hoverCallback

  let hideChildren = true
  
  const toggleOpen = (node) => { 
    hideChildren = !hideChildren 
    selectCallback(node)
  }
</script>

<li class="flex flex-col ml-4" class:collapse={hidden}>
  {#if node.children}
    <a on:click={() => toggleOpen(node)} on:pointerenter={() => hoverCallback(node)}>
      {node.data[0]}
    </a>

    {#each node.children as child}
      <svelte:self node={child} hidden={hideChildren} {selectCallback} {hoverCallback} />
    {/each}
  {:else}
    <a on:click={() => selectCallback(node)}>
      {node.data.attributes.title}
    </a>
  {/if}
</li>