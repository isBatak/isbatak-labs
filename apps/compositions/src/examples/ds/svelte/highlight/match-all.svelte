<script lang="ts">
  import { Highlight } from "@isbatak/svelte-ui/highlight"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<Text>
  <Highlight query="a" text="A banana and a papaya" variant="solid" matchAll ignoreCase />
</Text>
