<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Tag } from "@isbatak/svelte-ui/tag"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="2">
  <Tag.Root>
    <Tag.StartElement>
      <Icon name="star" />
    </Tag.StartElement>
    <Tag.Label>Favorite</Tag.Label>
  </Tag.Root>
  <Tag.Root class={css({ colorPalette: "green" })}>
    <Tag.Label>Verified</Tag.Label>
    <Tag.EndElement>
      <Icon name="check-circle" />
    </Tag.EndElement>
  </Tag.Root>
</HStack>
