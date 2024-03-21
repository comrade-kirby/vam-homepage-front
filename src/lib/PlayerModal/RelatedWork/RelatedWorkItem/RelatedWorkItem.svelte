<script>
  export let work
  export let selectWork
</script>

<!-- related work item -->
<button class="flex w-full mb-2" on:click={() => selectWork(index)}>
  <!-- thumbnail -->
  <img class="min-w-40 h-24" src={work.data.oembedData.thumbnail} />
  <!-- details -->
  <div class="flex flex-col items-start ml-2">
    <!-- title -->
    <h3 class="text-left">{work.data.title}</h3>
    <!-- client -->
    <h4 class="text-left">{work.data.client.data.attributes.name}</h4>
  </div>
</button>