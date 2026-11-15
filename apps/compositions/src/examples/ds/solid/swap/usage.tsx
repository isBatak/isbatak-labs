import { createSignal } from "solid-js"
import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { Swap } from "@isbatak/solid-ui/swap"

export function SwapDemo() {
  const [swapped, setSwapped] = createSignal(false)
  return (
    <IconButton
      variant="outline"
      aria-label="Copy"
      aria-pressed={swapped()}
      onClick={() => setSwapped((value) => !value)}
    >
      <Swap.Root swap={swapped()}>
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
