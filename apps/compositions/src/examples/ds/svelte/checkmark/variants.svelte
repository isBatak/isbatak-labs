<script lang="ts">
  import { Checkmark } from "@isbatak/svelte-ui/checkmark"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Checkmark checked variant="solid" />
  <Checkmark checked variant="outline" />
  <Checkmark checked variant="subtle" />
  <Checkmark checked variant="plain" />
  <Checkmark checked variant="inverted" />
</HStack>
