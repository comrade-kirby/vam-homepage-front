<script>
  import {
    SelectList,
    PlaylistItem,
    PressLink,
  } from '$lib'

  export let client

  $: attributes = client.attributes
  $: works = attributes.works.data
  $: presses = attributes.presses.data
</script>

<SelectList let:item={node}
    collapsable
    containsCurrent
    labelText="works"
    items={works}
  >
    {#each works as node}
      <PlaylistItem {node} />
    {/each}
  </SelectList>
  
  <SelectList let:item={press} 
    collapsable
    containsCurrent
    labelText="press"
    items={presses}
  >
    {#each presses as press}
      <PressLink {press} />
    {/each}
</SelectList>