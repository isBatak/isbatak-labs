<script lang="ts">
  import { Format } from "@isbatak/svelte-ui/format"
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<VStack gap="2" alignItems="flex-start">
  <Text><Format.Byte value={1450.45} /></Text>
  <Text><Format.Byte value={1450.45} unitSystem="binary" /></Text>
  <Text><Format.Byte value={1450.45} unit="bit" /></Text>
  <Text><Format.Byte value={1450.45} unitDisplay="long" /></Text>
</VStack>
