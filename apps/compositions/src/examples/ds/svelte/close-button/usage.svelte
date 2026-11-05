<script lang="ts">
  import { CloseButton } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <CloseButton variant="ghost" />
  <CloseButton variant="outline" />
  <CloseButton variant="subtle" />
</HStack>
