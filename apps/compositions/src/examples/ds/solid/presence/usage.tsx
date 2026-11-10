import { Button } from "@isbatak/solid-ui/button"
import { Presence } from "@isbatak/solid-ui/presence"
import { Stack } from "@isbatak/solid-ui/stack"
import { createSignal } from "solid-js"
import { css } from "styled-system/css"

export function PresenceDemo() {
  const [present, setPresent] = createSignal(false)

  return (
    <Stack gap="4" alignItems="flex-start">
      <Button variant="outline" onClick={() => setPresent(!present())}>
        Toggle
      </Button>
      <Presence
        present={present()}
        lazyMount
        unmountOnExit
        class={css({
          maxW: "sm",
          p: "4",
          bg: "bg.subtle",
          borderRadius: "l3",
          textStyle: "sm",
          _open: { animationStyle: "scale-fade-in", animationDuration: "moderate" },
          _closed: { animationStyle: "scale-fade-out", animationDuration: "fast" },
        })}
      >
        Fades and scales in. When it closes, it stays in the page until its exit animation ends.
      </Presence>
    </Stack>
  )
}
