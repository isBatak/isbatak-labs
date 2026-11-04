import { ark } from "@ark-ui/vue/factory"
import { linkOverlay } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

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

export const LinkOverlay = styled(ark.a, { base: linkOverlay.raw() }, { defaultProps: { "data-link-overlay": "" } })
export type LinkOverlayProps = ComponentProps<typeof LinkOverlay>
