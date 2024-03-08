<script>
  import Playlist from "./Playlist/Playlist.svelte"
  import CollapseLeftButton from "$lib/CollapseLeftButton.svelte"
  
  export let selected
  export let currentIndex
  export let root
</script>

<div class="flex flex-col h-full max-w-96 p-4 pl-8 border-l-2 border-black-olive/10">
  {currentIndex}
  <CollapseLeftButton text="close" />
  <h1 class="text-base text-black-olive/90">{selected.data.title}</h1>
  <h2 class="text-sm text-black-olive/60">{selected.data.client.data.attributes.name}</h2>
  <p class="mt-4 text-xs text-black-olive/60 leading-relaxed">{selected.data.description}</p>
  
  <!-- show first ~3 lines and hide -->
  <h3 class="mt-4 text-sm text-black-olive/90">Credits</h3>
  <p class="text-xs text-black-olive/60 leading-relaxed">{selected.data.credits}</p>

  <!-- relatedContent -->
  <Playlist {selected} {currentIndex} {root} />
</div>