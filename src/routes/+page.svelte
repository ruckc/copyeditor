<script lang="ts">
  import "@fontsource/roboto/400.css";

  import Tabs from '$lib/components/Tabs.svelte';
  // import CopyEditor from "$lib/components/CopyEditor.svelte";
  import Tool2 from "$lib/components/Tool2.svelte";

  let items = [
      { label: 'Copy Editor', value: 1, component: CopyEditor},
      { label: 'Tool2', value: 2, component: Tool2}
  ];
</script>

<h1>AI Tools</h1>
<Tabs {items} />

<style>

</style>