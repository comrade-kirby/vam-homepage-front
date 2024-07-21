<script>
  export let node

  $: work = node.data || node.attributes
  $: title = work.attributes?.title || work.title
  $: client =  work.client
  $: href = work.slug
  $: oembedData = work.oembedData
</script>

<a {href} class="group relative overflow-show items-start flex w-full">
  {#if oembedData}
    <img class="h-20 aspect-video" src={oembedData.thumbnail} />
  {/if}
  
  <div class="flex flex-col h-full p-1 ml-1 text-left">
    <h3 class="font-medium text-white/80 line-clamp-[2] tracking-wide
      text-2xs md:text-xs 
      group-hover:text-orange-500/80 
    ">
      {title}
    </h3>
    <h4 class="text-orange-500/80 tracking-wide
      text-3xs md:text-2xs
      group-hover:text-orange-500/60 ">
      {client.name}
    </h4>
  </div>
</a>
