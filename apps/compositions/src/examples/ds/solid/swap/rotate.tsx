import { createSignal } from "solid-js"
import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { Swap } from "@isbatak/solid-ui/swap"

export function SwapRotateDemo() {
  const [swapped, setSwapped] = createSignal(false)
  return (
    <IconButton
      variant="outline"
      aria-label="Toggle theme"
      aria-pressed={swapped()}
      onClick={() => setSwapped((value) => !value)}
    >
      <Swap.Root variant="rotate" swap={swapped()}>
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
