import { Button } from "@isbatak/react-ui/button"
import { Collapsible } from "@isbatak/react-ui/collapsible"
import { css } from "styled-system/css"

export function CollapsiblePartialHeightDemo() {
  return (
    <Collapsible.Root collapsedHeight={64} maxW="sm">
      <Collapsible.Content>
        <div className={css({ textStyle: "sm", color: "fg.muted" })}>
          Ark UI's Collapsible shows and hides a single section of content. It animates the height, and keeps the
          trigger and content linked for screen readers. Ark UI's Collapsible shows and hides a single section of
          content. It animates the height, and keeps the trigger and content linked for screen readers. Set
          collapsedHeight to keep part of the content visible while it's closed.
        </div>
      </Collapsible.Content>
      <Collapsible.Trigger asChild>
        <Button variant="plain" size="sm" mt="2" px="0">
          Read more
          <Collapsible.Indicator />
        </Button>
      </Collapsible.Trigger>
    </Collapsible.Root>
  )
}
