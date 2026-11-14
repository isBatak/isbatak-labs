<script lang="ts">
  import { Format } from "@isbatak/svelte-ui/format"
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<VStack gap="2" alignItems="flex-start">
  <Text><Format.Number value={1234567.891} /></Text>
  <Text><Format.Number value={1234.5} style="currency" currency="USD" /></Text>
  <Text><Format.Number value={0.145} style="percent" maximumFractionDigits={1} /></Text>
  <Text><Format.Number value={1234567} notation="compact" compactDisplay="short" /></Text>
</VStack>
