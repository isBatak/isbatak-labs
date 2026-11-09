import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Tooltip } from "@isbatak/react-ui/tooltip"
import { HStack } from "styled-system/jsx"
import { css } from "styled-system/css"
import { useState } from "react"

export function TooltipControlledDemo() {
  const [open, setOpen] = useState(false)

  return (
    <HStack gap="4">
      <Tooltip.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
              Saved to your library
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <p className={css({ color: "fg.muted", textStyle: "sm" })}>
        {open ? "The tooltip is open" : "The tooltip is closed"}
      </p>
    </HStack>
  )
}
