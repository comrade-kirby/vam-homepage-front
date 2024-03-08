<script>
  import PlaylistItem from "./PlaylistItem/PlaylistItem.svelte"

  export let selected
  export let currentIndex
  export let root
</script>

<h3 class="mt-4 text-sm text-black-olive/90">Related Works</h3>
  <p>selected: {selected.data.title}</p>
  {#each selected.data.relatedWorks as node, index}
    <PlaylistItem {node} {index} {root} {selected} focused={index == currentIndex} />
  {/each}