import { createRecipeContext, styled } from "@isbatak/vue-ui/jsx"
import { type KbdVariantProps, kbd } from "@isbatak/panda-ds/recipes"
import { type FunctionalComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const { withContext, PropsProvider } = createRecipeContext(kbd)

export const Kbd = withContext("kbd")
export type KbdProps = ComponentProps<typeof Kbd>

export const KbdPropsProvider = PropsProvider

const StyledKbdGroup = styled("kbd", { base: { display: "inline-flex", alignItems: "center", gap: "1" } })

export type KbdGroupProps = ComponentProps<typeof StyledKbdGroup> & KbdVariantProps

export const KbdGroup: FunctionalComponent<KbdGroupProps> = (props, { slots }) => {
  const [variantProps, localProps] = kbd.splitVariantProps(props)
  return h(KbdPropsProvider, { value: variantProps }, () => h(StyledKbdGroup, localProps, slots))
}
