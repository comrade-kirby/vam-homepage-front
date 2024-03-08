<script>
  import PlaylistItem from "./PlaylistItem/PlaylistItem.svelte"

  export let selected
  export let focused
</script>

<h3 class="mt-4 text-sm text-black-olive/90">Related Works</h3>
  {#each selected.data.relatedWorks as node, index}
    <PlaylistItem {node} {index} {selected} {focused} />
  {/each}