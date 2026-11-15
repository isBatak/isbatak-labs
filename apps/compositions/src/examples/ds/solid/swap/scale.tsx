import { createSignal } from "solid-js"
import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { Swap } from "@isbatak/solid-ui/swap"

export function SwapScaleDemo() {
  const [swapped, setSwapped] = createSignal(false)
  return (
    <IconButton
      variant="outline"
      aria-label="Like"
      aria-pressed={swapped()}
      onClick={() => setSwapped((value) => !value)}
    >
      <Swap.Root variant="scale" swap={swapped()}>
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
