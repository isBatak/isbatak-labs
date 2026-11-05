<script lang="ts">
  import { Checkmark } from "@isbatak/svelte-ui/checkmark"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Checkmark />
  <Checkmark checked />
  <Checkmark indeterminate />
  <Checkmark checked disabled />
</HStack>
