<script lang="ts">
  import { Tag } from "@isbatak/svelte-ui/tag"
  import { css } from "styled-system/css"
</script>

<Tag.Root size="sm" class={css({ colorPalette: "blue", maxW: "2xs" })}>
  <Tag.Label>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias, laboriosam, quod, quia quidem quae
    voluptatem natus exercitationem autem quibusdam
  </Tag.Label>
  <Tag.EndElement>
    <Tag.CloseTrigger />
  </Tag.EndElement>
</Tag.Root>
