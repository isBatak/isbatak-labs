import { Button } from "@isbatak/solid-ui/button"
import { Collapsible } from "@isbatak/solid-ui/collapsible"
import { css } from "styled-system/css"

export function CollapsibleIndicatorDemo() {
  return (
    <Collapsible.Root maxW="sm">
      <Collapsible.Trigger
        asChild={(props) => (
          <Button {...props()} variant="ghost">
            Show details
            <Collapsible.Indicator />
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
