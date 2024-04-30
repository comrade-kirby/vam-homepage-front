<script>
  export let selected
</script>

<div class="relative w-fit h-fit p-0.5 -mb-1 pr-0 rounded-l-full md:pr-0.5 md:pl-0 md:rounded-l-none md:rounded-r-full {
  selected
    ? 'z-10 from-primary-md/80 to-primary/80 right-3.5 bg-gradient-to-l md:left-3.5 md:bg-gradient-to-r'
    : 'bg-primary-md right-2.5 mr-1 md:left-2.5 md:mr-0 md:ml-1 '
}">
  <div class="bg-black rounded-l-full md:rounded-l-none md:rounded-r-full">
    <slot/>
  </div>
</div>