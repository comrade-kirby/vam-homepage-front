<script>
  import logo from '$lib/images/VAM-logo.png';
  import { Progress } from '$lib'
  import { loading, loadingLog } from '$lib/stores.js'
</script>

{#if $loading}

  <div class="z-50 w-full h-full top-0 p-4 absolute flex flex-col bg-dark/50 justify-center items-center backdrop-blur-md">
    <img src={logo} class="w-[50%] max-w-160 min-w-80 place-self-center object-contain" alt="VAM Studio Logo" />
    <Progress logs={$loadingLog} progress={$loadingLog.progress}/>
    <div>
      {#each Object.values($loadingLog.logs) as log}
        {#if log.state}
          <p class="text-white/50 text-2xs">
            {log.state === 'started'
              ? log.onStarted
              : log.onComplete
            }
          </p>
        {/if}
      {/each}
    </div>
  </div>
{/if}
