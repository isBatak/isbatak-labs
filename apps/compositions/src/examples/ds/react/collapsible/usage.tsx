import { Button } from "@isbatak/react-ui/button"
import { Collapsible } from "@isbatak/react-ui/collapsible"
import { css } from "styled-system/css"

export function CollapsibleDemo() {
  return (
    <Collapsible.Root maxW="sm">
      <Collapsible.Trigger asChild>
        <Button variant="outline">Toggle</Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div
          className={css({
            p: "4",
            mt: "2",
            borderWidth: "1px",
            borderRadius: "l2",
            textStyle: "sm",
            color: "fg.muted",
          })}
        >
          Ark UI's Collapsible shows and hides a single section of content. It animates the height, and keeps the
          trigger and content linked for screen readers.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
