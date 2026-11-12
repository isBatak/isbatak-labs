<script lang="ts">
  import { Tag } from "@isbatak/svelte-ui/tag"
  import { Wrap } from "@isbatak/svelte-ui/wrap"
  import { css } from "styled-system/css"
</script>

<Wrap gap="2">
  <Tag.Root class={css({ colorPalette: "gray" })}>
    <Tag.Label>Gray</Tag.Label>
  </Tag.Root>
  <Tag.Root class={css({ colorPalette: "blue" })}>
    <Tag.Label>Blue</Tag.Label>
  </Tag.Root>
  <Tag.Root class={css({ colorPalette: "green" })}>
    <Tag.Label>Green</Tag.Label>
  </Tag.Root>
  <Tag.Root class={css({ colorPalette: "yellow" })}>
    <Tag.Label>Yellow</Tag.Label>
  </Tag.Root>
  <Tag.Root class={css({ colorPalette: "red" })}>
    <Tag.Label>Red</Tag.Label>
  </Tag.Root>
  <Tag.Root class={css({ colorPalette: "purple" })}>
    <Tag.Label>Purple</Tag.Label>
  </Tag.Root>
</Wrap>
