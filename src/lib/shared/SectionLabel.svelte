<script>
  export let containsCurrent = true
</script>

<h3 class="group text-xl text-nowrap font-black flex mb-2 w-full -ml-2 tracking-widest {containsCurrent ? 'text-tprimary/70' : 'text-tprimary/50 hover:text-tprimary/60'}">
  <slot />
</h3>