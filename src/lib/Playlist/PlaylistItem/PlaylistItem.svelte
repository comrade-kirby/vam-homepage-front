<script>
  import { selected } from "$lib/stores"

  export let node

  $: work = node.data || node.attributes
  $: title = work.attributes?.title || work.title
  $: client =  work.client
  $: href = work.slug + '/details'
  $: oembedData = work.oembedData
  $: isSelected= node == $selected
</script>

<a {href} class="group relative overflow-show items-start flex w-full mt-2 mb-3 pl-2 border-l-2 border-orange-800/40 hover:border-orange-800/90 {isSelected && 'border-orange-800/90'}">
  {#if oembedData}
    <img class="h-20 aspect-video" src={oembedData.thumbnail} />
  {/if}
  
  <div class="flex flex-col h-full p-1 ml-1 text-left">
    <h3 class="text-xs font-medium text-black-olive/80 group-hover:text-orange-900/80 line-clamp-[2] tracking-wide">{title}</h3>
    <h4 class="text-2xs  text-orange-800/80 group-hover:text-orange-800/95 tracking-wide">{client.name}</h4>
  </div>
</a>