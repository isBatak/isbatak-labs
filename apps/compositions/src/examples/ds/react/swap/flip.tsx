import { useState } from "react"
import { IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { Swap } from "@isbatak/react-ui/swap"

export function SwapFlipDemo() {
  const [swapped, setSwapped] = useState(false)
  return (
    <IconButton
      variant="outline"
      aria-label="Toggle lock"
      aria-pressed={swapped}
      onClick={() => setSwapped((value) => !value)}
    >
      <Swap.Root variant="flip" swap={swapped}>
        <Swap.Indicator type="off">
          <Icon name="lock" />
        </Swap.Indicator>
        <Swap.Indicator type="on">
          <Icon name="unlock" />
        </Swap.Indicator>
      </Swap.Root>
    </IconButton>
  )
}
