<script lang="ts">
  import { Stat } from "@isbatak/svelte-ui/stat"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<Stat.Root card maxW="xs">
  <HStack justifyContent="space-between">
    <Stat.Label>Sales</Stat.Label>
    <Icon name="shopping-bag" color="fg.muted" />
  </HStack>
  <Stat.ValueText>$4.24k</Stat.ValueText>
</Stat.Root>
