<script>
  export let containsCurrent = true
</script>

<h3 class="group text-2xl font-black flex mb-2 tracking-widest {containsCurrent ? 'text-tprimary/70' : 'text-tprimary/50 hover:text-tprimary/60'}">
  <slot />
</h3>