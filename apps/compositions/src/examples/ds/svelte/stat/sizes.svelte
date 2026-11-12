<script lang="ts">
  import { Stat } from "@isbatak/svelte-ui/stat"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="8" alignItems="flex-start">
  <Stat.Root size="xs">
    <Stat.Label>Extra small</Stat.Label>
    <Stat.ValueText>192.1k</Stat.ValueText>
  </Stat.Root>
  <Stat.Root size="sm">
    <Stat.Label>Small</Stat.Label>
    <Stat.ValueText>192.1k</Stat.ValueText>
  </Stat.Root>
  <Stat.Root size="md">
    <Stat.Label>Medium</Stat.Label>
    <Stat.ValueText>192.1k</Stat.ValueText>
  </Stat.Root>
  <Stat.Root size="lg">
    <Stat.Label>Large</Stat.Label>
    <Stat.ValueText>192.1k</Stat.ValueText>
  </Stat.Root>
</HStack>
