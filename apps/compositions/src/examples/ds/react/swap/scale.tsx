import { useState } from "react"
import { IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { Swap } from "@isbatak/react-ui/swap"

export function SwapScaleDemo() {
  const [swapped, setSwapped] = useState(false)
  return (
    <IconButton
      variant="outline"
      aria-label="Like"
      aria-pressed={swapped}
      onClick={() => setSwapped((value) => !value)}
    >
      <Swap.Root variant="scale" swap={swapped}>
        <Swap.Indicator type="off">
          <Icon name="heart" />
        </Swap.Indicator>
        <Swap.Indicator type="on">
          <Icon name="heart-filled" />
        </Swap.Indicator>
      </Swap.Root>
    </IconButton>
  )
}
