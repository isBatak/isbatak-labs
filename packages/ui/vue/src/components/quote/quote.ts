import { ark } from "@ark-ui/vue/factory"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Quote = styled(ark.q, {
  base: {
    fontWeight: "bold",
    lineHeight: "shorter",
  },
})
export type QuoteProps = ComponentProps<typeof Quote>
