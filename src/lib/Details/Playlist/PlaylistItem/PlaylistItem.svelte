<script>
  import { buildBreadcrumb } from "$lib/helpers"

  export let node
  export let index
  export let root
  export let selected
  export let focused


  const buildHref = (selected, index) => {
    const path = root.path(selected)
    const href = `/${index}${buildBreadcrumb(path)}`

    return href
  }
</script>

<a href="{buildHref(selected, index)}" class="flex w-full mt-2 hover:bg-blue-300/30" class:bg-blue-300={focused}>
  <img class="h-20 aspect-video" src={node.data.oembedData.thumbnail} />
  
  <div class="flex flex-col p-1 ml-1 text-left">
    <h3 class="text-xs text-black-olive/90 line-clamp-[2]">{node.data.title}</h3>
    <!-- <p class=" text-2xs text-black-olive/70 line-clamp-[2]">{node.data.description}</p> -->
    <h4 class="text-2xs  text-orange-800/90">{node.data.client.data.attributes.name}</h4>
  </div>
</a>