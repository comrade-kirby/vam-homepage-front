<script>
  import PlaylistItem from "./PlaylistItem/PlaylistItem.svelte"

  export let relatedWorks
</script>

{#each relatedWorks as node}
  <PlaylistItem {node} />
{/each}