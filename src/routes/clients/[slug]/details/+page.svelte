<script>
  import SelectList from '$lib/shared/SelectList.svelte';

  import PlaylistItem from '$lib/shared/PlaylistItem.svelte';
  import MenuLink from '$lib/shared/PressLink.svelte'
  import DetailsWrapper from '$lib/shared/DetailsWrapper.svelte'

  export let data
  
  
  $: client = data.client.attributes
  $: slug = '/' + client.slug
  $: closeUrl = '/clients' + slug
  $: works = client.works.data
  $: presses = client.presses.data
</script>

<DetailsWrapper {closeUrl} title={client.name} minimizedLabelText={slug}>
  <SelectList let:item={node}
    collapsable
    containsCurrent
    labelText="works"
    items={works}
  >
    <PlaylistItem {node} />
  </SelectList>
  
  <SelectList let:item={press} 
    collapsable
    containsCurrent
    labelText="press"
    items={presses}
  >
    <MenuLink {press} />
  </SelectList>
</DetailsWrapper>