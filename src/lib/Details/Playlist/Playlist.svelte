<script>
  import PlaylistItem from "./PlaylistItem/PlaylistItem.svelte"
  import { selected } from "$lib/stores"
</script>

<h3 class="mt-4 text-sm text-black-olive/90">Related Works</h3>
{#each $selected.getRelatedWorks() as node, index}
  <PlaylistItem {node} {index} />
{/each}