import { createSignal } from "solid-js"
import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { Swap } from "@isbatak/solid-ui/swap"

export function SwapFlipDemo() {
  const [swapped, setSwapped] = createSignal(false)
  return (
    <IconButton
      variant="outline"
      aria-label="Toggle lock"
      aria-pressed={swapped()}
      onClick={() => setSwapped((value) => !value)}
    >
      <Swap.Root variant="flip" swap={swapped()}>
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
