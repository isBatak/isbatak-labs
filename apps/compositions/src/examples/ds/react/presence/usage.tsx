import { Button } from "@isbatak/react-ui/button"
import { Presence } from "@isbatak/react-ui/presence"
import { useState } from "react"
import { css } from "styled-system/css"
import { Stack } from "styled-system/jsx"

export function PresenceDemo() {
  const [present, setPresent] = useState(false)

  return (
    <Stack gap="4" alignItems="flex-start">
      <Button variant="outline" onClick={() => setPresent(!present)}>
        Toggle
      </Button>
      <Presence
        present={present}
        lazyMount
        unmountOnExit
        className={css({
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
