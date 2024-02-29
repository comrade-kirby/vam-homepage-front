<script>
  import RelatedWorkItem from "./RelatedWorkItem/RelatedWorkItem.svelte"
  
  export let worksList
  export let selectWork
  
</script>

<div class="max-w-md">
  <h2 class="mb-2 text-lg">Related Work</h2>

  {#each worksList as work, index}
    <RelatedWorkItem {work} {selectWork} {index}/>
  {/each}
</div>