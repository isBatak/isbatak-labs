<script lang="ts">
  import { Radiomark } from "@isbatak/svelte-ui/radiomark"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Radiomark checked variant="solid" />
  <Radiomark checked variant="outline" />
  <Radiomark checked variant="subtle" />
  <Radiomark checked variant="inverted" />
</HStack>
