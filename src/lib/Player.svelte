<script>
  import { PUBLIC_CMS_URL } from '$env/static/public'

  // import { onMount } from "svelte";

  export let closePlayer
  export let worksList
  export let index = 0

  const listLength = worksList.length

  const next = () => index = index < listLength - 1 ? index + 1 : 0
  const prev = () => index = index > 0 ? index - 1 : listLength - 1

  $: currentWork = worksList[index].data.attributes
</script>

<!-- modal -->
<section class="w-screen h-screen fixed top-0 left-0 z-20 overflow-hidden p-4">
  
  <!-- content -->
  <div class="w-full h-full sticky top-0 bg-slate-200">
    <!-- header -->
    <div class="w-full flex justify-end absolute top-0 z-40">
      <button class="p-2" on:click={prev}>prev</button>
      <button class="p-2" on:click={next}>next</button>
      <button class="p-2" on:click={closePlayer}>close</button> 
    </div>
    <!-- scroll -->
    <div class="w-full h-full sticky top-0 overflow-y-scroll">

      <!-- player -->
      <div class="sticky z-20 top-0 w-full aspect-video bg-slate-400">
        <iframe 
          class="sticky top-0 w-full h-full"
          src={currentWork.videoUrl} 
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>

      <!-- additional content -->
      <div class="flex justify-center relative w-full h-full space-x-6 z-30 bg-red-200 p-4 pt-10 ">
        <!-- description -->
        <div class="flex-column max-w-2xl flex-1">
          <h1 class="text-xl mb-4">{currentWork.title}</h1>
          <div class="text-base mb-4">
            {currentWork.description}
          </div>

          <h2 class="text-lg mb-2">Credits</h2>
          <div class="text-base">
            {currentWork.credits}
          </div>
        </div>
        <!-- playlist -->
        <div class="max-w-md">
          <h2 class="mb-2 text-lg">Related Work</h2>

          {#each worksList as work, i}
            <div on:click={() => index = i} class="flex w-full mb-2">
              <img class="min-w-40 h-24"
                src={PUBLIC_CMS_URL + work.data.attributes.thumbnail.data.attributes.url} />
              <div class="flex-column ml-2">
                <h3>{work.data.attributes.title}</h3>
                <h4>{work.data.attributes.client.data.attributes.name}</h4>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>