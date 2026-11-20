import type { ReactNode } from "react"
import { css, cx } from "styled-system/css"

import { CaliperCanvas, CaliperCaption, CaliperRoot } from "./caliper"

export interface CaliperFigureProps {
  caption?: ReactNode
  children: ReactNode
}

const figure = css({ my: "10", mx: { base: "0", lg: "-16" } })

/** A Caliper drawing inside a post or doc page, slightly wider than the text column. */
export function CaliperFigure({ caption, children }: CaliperFigureProps) {
  return (
    <CaliperRoot className={cx("not-prose", figure)}>
      <CaliperCanvas>{children}</CaliperCanvas>
      {caption && <CaliperCaption>{caption}</CaliperCaption>}
    </CaliperRoot>
  )
}
