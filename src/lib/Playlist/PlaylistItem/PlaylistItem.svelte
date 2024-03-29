<script>
  import { selected } from "$lib/stores"

  export let node

  $: isSelected= node == $selected
</script>

<!-- TODO: style for visited -->
<a href="/{node.data.slug}/details" class="group relative overflow-show items-center flex w-full mt-2">
  <div class:hidden={!isSelected} class="h-2 w-2 absolute hidden -left-4 bg-orange-800/80 br-10 rounded group-hover:block group-hover:bg-orange-700/80"></div>
 
  {#if node.data.oembedData}
    <img class="h-20 aspect-video" src={node?.data.oembedData.thumbnail} />
  {/if}
  
  <div class="flex flex-col h-full p-1 ml-1 text-left">
    <h3 class="text-xs text-black-olive/90 line-clamp-[2]">{node.data.attributes.title}</h3>
    <h4 class="text-2xs  text-orange-800/90">{node.data.client.name}</h4>
  </div>
</a>