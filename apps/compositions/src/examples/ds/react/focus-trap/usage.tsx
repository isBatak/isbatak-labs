import { Button } from "@isbatak/react-ui/button"
import { FocusTrap } from "@isbatak/react-ui/focus-trap"
import { Input } from "@isbatak/react-ui/input"
import { useState } from "react"
import { css } from "styled-system/css"
import { Stack } from "styled-system/jsx"

export function FocusTrapDemo() {
  const [trapped, setTrapped] = useState(false)

  return (
    <Stack gap="4" alignItems="flex-start">
      <Button variant="outline" onClick={() => setTrapped(true)}>
        Trap focus
      </Button>
      <FocusTrap
        disabled={!trapped}
        className={css({
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
