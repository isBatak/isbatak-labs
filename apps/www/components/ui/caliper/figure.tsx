import { IconButton } from "@isbatak/react-ui/button"
import type { ReactNode } from "react"
import { css, cx } from "styled-system/css"

import { Icon } from "../icon"
import { CaliperCanvas, CaliperCaption, CaliperOverlayTrigger, CaliperRoot } from "./caliper"

export interface CaliperFigureProps {
  caption?: ReactNode
  children: ReactNode
}

const figure = css({ my: "10", mx: { base: "0", lg: "-16" } })

/** A Caliper drawing inside a post or doc page, slightly wider than the text column. */
export function CaliperFigure({ caption, children }: CaliperFigureProps) {
  return (
    <CaliperRoot className={cx("not-prose", figure)}>
      <CaliperCanvas>
        {children}
        <CaliperOverlayTrigger asChild>
          <IconButton
            variant={{ base: "ghost", _pressed: "surface" }}
            size="sm"
            colorPalette="gray"
            color="fg.subtle"
            _pressed={{ color: "fg" }}
            aria-label="Show measurements"
          >
            <Icon name="ruler" />
          </IconButton>
        </CaliperOverlayTrigger>
      </CaliperCanvas>
      {caption && <CaliperCaption>{caption}</CaliperCaption>}
    </CaliperRoot>
  )
}
