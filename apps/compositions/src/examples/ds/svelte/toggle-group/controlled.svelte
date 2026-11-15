<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { ToggleGroup } from "@isbatak/svelte-ui/toggle-group"
  import { css } from "styled-system/css"

  let value = $state(["left"])
</script>

<Stack gap="3" align="flex-start">
  <ToggleGroup.Root bind:value aria-label="Text alignment">
    <ToggleGroup.Item value="left" aria-label="Align left">
      <Icon name="align-left" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="center" aria-label="Align center">
      <Icon name="align-center" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="right" aria-label="Align right">
      <Icon name="align-right" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="justify" aria-label="Justify">
      <Icon name="align-justify" />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
  <p class={css({ color: "fg.muted", textStyle: "sm" })}>Aligned: {value.join(", ") || "none"}</p>
</Stack>
