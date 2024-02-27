<script>
  export let data
  export let hidden = true
  
  let hideChildren = true
  const toggleOpen = () => { hideChildren = !hideChildren }
  const selectWork = () => { console.log('work selected') }
</script>

<li class="flex flex-col ml-4" class:collapse={hidden}>
  {#if data.children}
    <a on:click={toggleOpen}>{data.data[0]}</a>
    {#each data.children as child}
      <svelte:self data={child} hidden={hideChildren} />
    {/each}
  {:else}
    <a on:click={selectWork}>{data.data.attributes.title}</a>
  {/if}
</li>