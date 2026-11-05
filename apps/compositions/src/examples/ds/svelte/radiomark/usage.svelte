<script lang="ts">
  import { Radiomark } from "@isbatak/svelte-ui/radiomark"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Radiomark />
  <Radiomark checked />
  <Radiomark checked disabled />
</HStack>
