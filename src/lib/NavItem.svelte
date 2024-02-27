<script>
  export let data
  export let hidden = true
  export let selectCallback

  let hideChildren = true
  
  const toggleOpen = () => { hideChildren = !hideChildren }
</script>

<li class="flex flex-col ml-4" class:collapse={hidden}>
  {#if data.children}
    <a on:click={toggleOpen}>
      {data.data[0]}
    </a>

    {#each data.children as child}
      <svelte:self data={child} hidden={hideChildren} {selectCallback} />
    {/each}
  {:else}
    <a on:click={() => selectCallback(data.data.attributes.title)}>
      {data.data.attributes.title}
    </a>
  {/if}
</li>