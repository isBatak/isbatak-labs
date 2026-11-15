import { useState } from "react"
import { IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { Swap } from "@isbatak/react-ui/swap"

export function SwapDemo() {
  const [swapped, setSwapped] = useState(false)
  return (
    <IconButton
      variant="outline"
      aria-label="Copy"
      aria-pressed={swapped}
      onClick={() => setSwapped((value) => !value)}
    >
      <Swap.Root swap={swapped}>
        <Swap.Indicator type="off">
          <Icon name="copy" />
        </Swap.Indicator>
        <Swap.Indicator type="on">
          <Icon name="check" />
        </Swap.Indicator>
      </Swap.Root>
    </IconButton>
  )
}
