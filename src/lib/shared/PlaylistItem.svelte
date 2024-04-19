<script>
  export let node

  $: work = node.data || node.attributes
  $: title = work.attributes?.title || work.title
  $: client =  work.client
  $: href = work.slug + '/details'
  $: oembedData = work.oembedData
</script>

<a {href} class="group relative overflow-show items-start flex w-full">
  {#if oembedData}
    <img class="h-20 aspect-video" src={oembedData.thumbnail} />
  {/if}
  
  <div class="flex flex-col h-full p-1 ml-1 text-left">
    <h3 class="text-xs font-medium text-tprimary/80 group-hover:text-orange-500/80 line-clamp-[2] tracking-wide">{title}</h3>
    <h4 class="text-2xs  text-orange-500/80 group-hover:text-orange-500/60 tracking-wide">{client.name}</h4>
  </div>
</a>
