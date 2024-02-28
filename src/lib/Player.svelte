<script>
  import { onMount } from "svelte";

  export let forceGraph
  export let closePlayer

  let selectedWork = null
  let relatedWorks = []

  const reducer = (acc, curr) => {
    if (curr.data.attributes && !acc.has(curr)) {
      acc.add(curr)
    } else if (curr.children) {
      curr.children.reduce(reducer, acc)
    }

    return acc
  }

  onMount(() => {
    selectedWork = forceGraph.getSelected()
    relatedWorks = selectedWork.ancestors().reduce(reducer, new Set())
  })
</script>

<section class="w-screen min-h-full absolute top-0 left-0 z-2 p-2 bg-slate-200">
  <div class="sticky top-2 w-full bg-slate-400">
     <!-- header -->
    <div class="w-full flex justify-end">
      <button class="p-2">prev</button>
      <button class="p-2">next</button>
      <button class="p-2" on:click={closePlayer}>close</button> 
    </div>
    <!-- player -->
    <iframe 
      class="w-full z-2 aspect-video"
      src="https://www.youtube.com/embed/D6Ac5JpCHmI?&autoplay=1" 
      frameborder="0"
      allowfullscreen
    >
    </iframe>
  </div>

  <!-- additional content -->
  <div class="sticky top-10 h-100 z-30 bg-red-200">
    <!-- description -->
    <div>
      {selectedWork?.data?.attributes.description}
    </div>
    <!-- playlist -->
    <div>
      {#each relatedWorks as work}
        <p>{work.data.attributes.title}</p>
      {/each}
    </div>
  </div>

</section>