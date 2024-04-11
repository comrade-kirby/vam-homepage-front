<script>
  import SelectList from '$lib/shared/SelectList.svelte'
  import PlaylistItem from './PlaylistItem/PlaylistItem.svelte'

  export let relatedWorks
</script>

<SelectList>
  {#each relatedWorks as work}
    <PlaylistItem node={work} />
  {/each}
</SelectList>