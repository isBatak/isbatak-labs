import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"

export const Quote = styled(ark.q, {
  base: {
    fontWeight: "bold",
    lineHeight: "shorter",
  },
})
export type QuoteProps = ComponentProps<typeof Quote>
