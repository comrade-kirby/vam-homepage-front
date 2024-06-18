<script>
  import { Progress } from 'bits-ui'

  export let value
</script>

<Progress.Root
  {value}
  max={100}
  class="relative h-[15px] w-[60%] overflow-hidden rounded-full bg-blue-500 shadow-mini-inset"
>
  <div
    class="h-full w-full flex-1 rounded-full bg-orange-400 shadow-mini-inset transition-all duration-1000 ease-in-out"
    style={`transform: translateX(-${
      100 - (100 * (value ?? 0)) / (100 ?? 1)
    }%)`}
  />
</Progress.Root>