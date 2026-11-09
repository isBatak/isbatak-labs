import { Button } from "@isbatak/solid-ui/button"
import { Collapsible } from "@isbatak/solid-ui/collapsible"
import { css } from "styled-system/css"
import { createSignal } from "solid-js"

export function CollapsibleControlledDemo() {
  const [open, setOpen] = createSignal(false)

  return (
    <Collapsible.Root open={open()} onOpenChange={(details) => setOpen(details.open)} maxW="sm">
      <Collapsible.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            {open() ? "Hide" : "Show"}
          </Button>
        )}
      />
      <Collapsible.Content>
        <div
          class={css({ p: "4", mt: "2", borderWidth: "1px", borderRadius: "l2", textStyle: "sm", color: "fg.muted" })}
        >
          Ark UI's Collapsible shows and hides a single section of content. It animates the height, and keeps the
          trigger and content linked for screen readers.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
