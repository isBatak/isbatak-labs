<script lang="ts">
  import { Tag } from "@isbatak/svelte-ui/tag"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="2">
  <Tag.Root size="sm">
    <Tag.Label>Small</Tag.Label>
    <Tag.EndElement>
      <Tag.CloseTrigger />
    </Tag.EndElement>
  </Tag.Root>
  <Tag.Root size="md">
    <Tag.Label>Medium</Tag.Label>
    <Tag.EndElement>
      <Tag.CloseTrigger />
    </Tag.EndElement>
  </Tag.Root>
  <Tag.Root size="lg">
    <Tag.Label>Large</Tag.Label>
    <Tag.EndElement>
      <Tag.CloseTrigger />
    </Tag.EndElement>
  </Tag.Root>
  <Tag.Root size="xl">
    <Tag.Label>Extra large</Tag.Label>
    <Tag.EndElement>
      <Tag.CloseTrigger />
    </Tag.EndElement>
  </Tag.Root>
</HStack>
