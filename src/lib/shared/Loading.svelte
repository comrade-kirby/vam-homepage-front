<script>
  let delay = true

  setTimeout(() => delay = false, 500)
</script>

{#if !delay}
  <div class="w-full flex justify-center items-center text-tprimary/80">
    loading 
    <div class='animate-spin ml-2'>
      <span class="relative bottom-0.5">
        &#10227;
      </span>
    </div>
  </div>
{/if}