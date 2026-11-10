import { Button } from "@isbatak/solid-ui/button"
import { Collapsible } from "@isbatak/solid-ui/collapsible"
import { css } from "styled-system/css"

export function CollapsibleLazyMountDemo() {
  return (
    <Collapsible.Root lazyMount unmountOnExit maxW="sm">
      <Collapsible.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Toggle
          </Button>
        )}
      />
      <Collapsible.Content>
        <div
          class={css({ p: "4", mt: "2", borderWidth: "1px", borderRadius: "l2", textStyle: "sm", color: "fg.muted" })}
        >
          This content mounts when it opens and unmounts when it closes.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
