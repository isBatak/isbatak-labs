<script lang="ts">
  import { Format } from "@isbatak/svelte-ui/format"
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<VStack gap="2" alignItems="flex-start">
  <Text><Format.Time value={new Date(2026, 10, 14, 15, 30, 45)} /></Text>
  <Text><Format.Time value={new Date(2026, 10, 14, 15, 30, 45)} format="24h" /></Text>
  <Text><Format.Time value={new Date(2026, 10, 14, 15, 30, 45)} withSeconds /></Text>
</VStack>
