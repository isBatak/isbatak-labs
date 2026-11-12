<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Tag } from "@isbatak/svelte-ui/tag"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="2">
  <Tag.Root>
    <Tag.StartElement>
      <Icon name="star" />
    </Tag.StartElement>
    <Tag.Label>Tag 1</Tag.Label>
    <Tag.EndElement>
      <Tag.CloseTrigger />
    </Tag.EndElement>
  </Tag.Root>
  <Tag.Root>
    <Tag.Label>Tag 2</Tag.Label>
    <Tag.EndElement>
      <Tag.CloseTrigger />
    </Tag.EndElement>
  </Tag.Root>
</HStack>
