import { Button } from "@isbatak/solid-ui/button"
import { FocusTrap } from "@isbatak/solid-ui/focus-trap"
import { Input } from "@isbatak/solid-ui/input"
import { Stack } from "@isbatak/solid-ui/stack"
import { createSignal } from "solid-js"
import { css } from "styled-system/css"

export function FocusTrapDemo() {
  const [trapped, setTrapped] = createSignal(false)

  return (
    <Stack gap="4" alignItems="flex-start">
      <Button variant="outline" onClick={() => setTrapped(true)}>
        Trap focus
      </Button>
      <FocusTrap
        disabled={!trapped()}
        class={css({
          display: "flex",
          flexDirection: "column",
          gap: "3",
          w: "full",
          maxW: "sm",
          p: "4",
          borderWidth: "1px",
          borderColor: "border.muted",
          borderRadius: "l3",
        })}
      >
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Button onClick={() => setTrapped(false)}>End trap</Button>
      </FocusTrap>
    </Stack>
  )
}
