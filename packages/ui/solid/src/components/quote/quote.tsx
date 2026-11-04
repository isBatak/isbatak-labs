import { ark } from "@ark-ui/solid/factory"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Quote = styled(ark.q, {
  base: {
    fontWeight: "bold",
    lineHeight: "shorter",
  },
})
export type QuoteProps = ComponentProps<typeof Quote>
