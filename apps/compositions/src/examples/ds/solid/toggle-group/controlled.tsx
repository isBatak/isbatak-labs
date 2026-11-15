import { Icon } from "@isbatak/solid-ui/icon"
import { Stack } from "@isbatak/solid-ui/stack"
import { ToggleGroup } from "@isbatak/solid-ui/toggle-group"
import { css } from "styled-system/css"
import { createSignal } from "solid-js"

export function ToggleGroupControlledDemo() {
  const [value, setValue] = createSignal(["left"])

  return (
    <Stack gap="3" align="flex-start">
      <ToggleGroup.Root
        value={value()}
        onValueChange={(details) => setValue(details.value)}
        aria-label="Text alignment"
      >
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
      <p class={css({ color: "fg.muted", textStyle: "sm" })}>Aligned: {value().join(", ") || "none"}</p>
    </Stack>
  )
}
