<script>
  export let node
  export let index
  export let selected
  export let focused

  let href, isFocused
  
  $: isFocused = node == focused
  $: href = `/${index}${selected.data.href}`
</script>

<a {href} class="group relative items-center flex w-full mt-2">
  <div class:hidden={!isFocused} class="h-2 w-2 absolute -left-4 bg-orange-500/90 br-10 rounded group-hover:block group-hover:bg-orange-400/70"></div>
  <img class="h-20 aspect-video" src={node.data.oembedData.thumbnail} />
  
  <div class="flex flex-col h-full p-1 ml-1 text-left">
    <h3 class="text-xs text-black-olive/90 line-clamp-[2]">{node.data.title}</h3>
    <h4 class="text-2xs  text-orange-800/90">{node.data.client.data.attributes.name}</h4>
  </div>
</a>