<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { ToggleGroup, useToggleGroup } from "@isbatak/svelte-ui/toggle-group"
  import { css } from "styled-system/css"

  const id = $props.id()
  const toggleGroup = useToggleGroup({ id, defaultValue: ["left"] })
</script>

<Stack gap="3" align="flex-start">
  <HStack gap="3">
    <ToggleGroup.RootProvider value={toggleGroup} aria-label="Text alignment">
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
    </ToggleGroup.RootProvider>
    <Button variant="outline" size="sm" onclick={() => toggleGroup().setValue(["center"])}>Set to center</Button>
  </HStack>
  <p class={css({ color: "fg.muted", textStyle: "sm" })}>Aligned: {toggleGroup().value.join(", ")}</p>
</Stack>
