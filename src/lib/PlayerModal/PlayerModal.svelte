<script>
  import RelatedWork from './RelatedWork/RelatedWork.svelte'
  import Player from './Player/Player.svelte'

  export let closePlayer
  export let worksList
  export let currentIndex = 0

  const listLength = worksList.length

  const next = () => currentIndex = currentIndex < listLength - 1 ? currentIndex + 1 : 0
  const prev = () => currentIndex = currentIndex > 0 ? currentIndex - 1 : listLength - 1
  const selectWork = (index) => currentIndex = index

  $: currentWork = worksList[currentIndex].data
</script>

<!-- modal -->
<section class="w-screen h-screen fixed top-0 left-0 z-20 overflow-hidden p-4">
  
  <!-- content -->
  <div class="w-full h-full sticky top-0 bg-slate-200 overflow-hidden">
    <!-- header -->
    <div class="w-full flex justify-end absolute top-0 z-40 bg-red-200">
      <button class="p-2" on:click={prev}>prev</button>
      <button class="p-2" on:click={next}>next</button>
      <button class="p-2" on:click={closePlayer}>close</button> 
    </div>
    <!-- scroll -->
    <div class="w-full h-full sticky top-10 overflow-y-scroll">

      <!-- player -->
      <Player work={currentWork.videoId} />

      <!-- additional content -->
      <div class="flex justify-center relative w-full h-full space-x-6 z-30 bg-red-200 p-4 pt-10 ">
        <!-- description -->
        <div class="flex-col max-w-2xl flex-1">
          <h1 class="text-xl mb-4">{currentWork.title}</h1>
          <div class="text-base mb-4">
            {currentWork.description}
          </div>

          <h2 class="text-lg mb-2">Credits</h2>
          <div class="text-base">
            {currentWork.credits}
          </div>
        </div>
        
        <RelatedWork {worksList} {selectWork} />
      </div>
    </div>
  </div>
</section>