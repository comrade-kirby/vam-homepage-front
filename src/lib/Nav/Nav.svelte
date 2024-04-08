<script>
  import SubNavPlaceholder from './SubNavPlaceholder/SubNavPlaceholder.svelte';
  import ContentPane from '$lib/shared/ContentPane.svelte';

</script>

<nav>
  <ContentPane width="w-24">
    <ul role="list" class="flex flex-col grow w-full">
      <SubNavPlaceholder title="Works" />
      <SubNavPlaceholder title="Clients" />
      <SubNavPlaceholder title="Press" />
    </ul>
  </ContentPane>
</nav>