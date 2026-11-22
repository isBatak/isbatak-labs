import { setIconSprite } from "@isbatak/icons"
import { Button } from "@isbatak/react-ui/button"
import { Icon, StartIcon } from "@isbatak/react-ui/icon"

import boring from "../../public/icons/boring.svg?raw"

setIconSprite("")

export function Sprite() {
  return (
    <div
      aria-hidden
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{ __html: boring.replace(/^<\?xml[^>]*>/, "") }}
    />
  )
}

export function NewProjectButton({ offset }: { offset: number }) {
  return (
    <Button variant="outline" colorPalette="gray" data-hover tabIndex={-1}>
      <StartIcon asChild style={{ marginInlineStart: -offset }}>
        <Icon name="plus" />
      </StartIcon>
      New project
    </Button>
  )
}
