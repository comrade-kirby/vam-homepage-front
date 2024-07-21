<script>
  import { ButtonStyles, Icon } from '$lib'
  import { openContactModal } from '$lib/stores.js'
</script>

{#if $openContactModal}
  <div class="pointer-events-auto absolute top-0 left-0 z-50 w-full h-full p-4 md:p-12 flex justify-center ">
    <div class="z-50 flex h-full flex-col grow self-center
      w-full max-w-192 lg:m-12 
      rounded border border-primary-md overflow-hidden
    ">
      <div class="flex justify-between p-4 bg-dark border-b border-primary-md">
        <h2 class=" text-white/90 text-lg tracking-wide mb-0">
          New Message
        </h2>
        
        <button on:click={() => openContactModal.set(false)} class="w-fit border-0">

          <ButtonStyles layout xl>
            <Icon name="close" />
          </ButtonStyles>
        </button>
      </div>
      
      <form class="w-full p-6 flex grow flex-col text-white/90 bg-darker tracking-wide">
        <label class="flex space-x-2 items-center">
          <span>To</span>
          <span class="p-3 grow text-white/70 tracking-widest">VAM Studio</span>
        </label>
        <label class="flex space-x-2 items-center border-b border-white/60">
          <span>From</span>
          <input type="text" class="p-3 mb-1 grow bg-darker border-0 focus:outline focus:outline-primary/50" />
        </label>
        <input type="text" placeholder="Subject" class="pl-0 mb-1 p-3 bg-darker border-0 border-b border-white/60 placeholder:text-white/60 focus:outline focus:outline-primary/50" />
        
        <textarea class="text-lg h-full grow bg-darker border-0 resize-none focus:outline focus:outline-primary/50" />
        
        <button class="mt-6 w-fit">
          <ButtonStyles xl outline layout>
            <span>SEND</span>
          </ButtonStyles>
        </button>
      </form>
    </div>


    <div on:click={() => openContactModal.set(false)}
      class="absolute top-0 left-0 w-full h-full z-40 backdrop-blur-sm bg-black/50 cursor-default"
    >
  asdf
    </div>
  </div>

{/if}