<script>
  import { cameraZoom } from '$lib/stores'
  import ButtonStyles from '../ButtonStyles.svelte'

  export let position
  console.log(position)
</script>

<div class="flex items-end justify-end border-2 border-orange-500 min-h-0 {
  position || 'lg:col-start-12 lg:row-start-3'
}">
  <div class="pointer-events-auto flex flex-col m-4 space-y-1">
    <button on:click={() => cameraZoom.zoomIn()} class="bg-dark/40 rounded-lg">
      <ButtonStyles outline layout xl>
        <span>{@html '&plus;'}</span>
      </ButtonStyles>
    </button>
    <button on:click={() => cameraZoom.zoomOut()} class="bg-dark/40 rounded-lg">
      <ButtonStyles outline layout xl>
        <span>{@html '&minus;'}</span>
      </ButtonStyles>
    </button>
  </div>
</div>