<script>
  import PlaylistItem from "./PlaylistItem/PlaylistItem.svelte"

  export let relatedWorks
</script>

<h3 class="mt-4 text-sm text-black-olive/90">Related Works</h3>
{#each relatedWorks as node}
  <PlaylistItem {node} />
{/each}