import { setIconSprite } from "@isbatak/icons"
import { Button } from "@isbatak/react-ui/button"
import { EndIcon, Icon, StartIcon } from "@isbatak/react-ui/icon"
import type { Ref } from "react"

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

export function SaveArticleButton({ offset }: { offset: number }) {
  return (
    <Button variant="outline" colorPalette="gray" data-hover tabIndex={-1}>
      <StartIcon asChild style={{ marginInlineStart: -offset }}>
        <Icon name="bookmark" />
      </StartIcon>
      Save article
    </Button>
  )
}

export function ContinueButton({ ref }: { ref?: Ref<HTMLButtonElement> }) {
  return (
    <Button ref={ref} variant="outline" colorPalette="gray" data-hover tabIndex={-1}>
      Continue
      <EndIcon asChild>
        <Icon name="arrow-right" />
      </EndIcon>
    </Button>
  )
}
