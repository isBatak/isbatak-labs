import { useState } from "react"
import { IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { Swap } from "@isbatak/react-ui/swap"

export function SwapRotateDemo() {
  const [swapped, setSwapped] = useState(false)
  return (
    <IconButton
      variant="outline"
      aria-label="Toggle theme"
      aria-pressed={swapped}
      onClick={() => setSwapped((value) => !value)}
    >
      <Swap.Root variant="rotate" swap={swapped}>
        <Swap.Indicator type="off">
          <Icon name="moon" />
        </Swap.Indicator>
        <Swap.Indicator type="on">
          <Icon name="sun" />
        </Swap.Indicator>
      </Swap.Root>
    </IconButton>
  )
}
