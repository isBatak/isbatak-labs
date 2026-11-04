import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { linkOverlay } from "@isbatak/panda-ds/patterns"

export const LinkBox = styled(ark.div, {
  base: {
    position: "relative",
    "& a[href]:not([data-link-overlay]), & abbr[title]": {
      position: "relative",
      zIndex: "[1]",
    },
  },
})
export type LinkBoxProps = ComponentProps<typeof LinkBox>

const StyledLinkOverlay = styled(ark.a, { base: linkOverlay.raw() })

export type LinkOverlayProps = ComponentProps<typeof StyledLinkOverlay>

export function LinkOverlay(props: LinkOverlayProps) {
  return <StyledLinkOverlay data-link-overlay="" {...props} />
}
