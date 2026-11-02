import { createRecipeContext, styled } from "@isbatak/solid-ui/jsx"
import { type KbdVariantProps, kbd } from "@isbatak/panda-ds/recipes"
import { type ComponentProps, splitProps } from "solid-js"

const { withContext, PropsProvider } = createRecipeContext(kbd)

export const Kbd = withContext("kbd")
export type KbdProps = ComponentProps<typeof Kbd>

export const KbdPropsProvider = PropsProvider

const StyledKbdGroup = styled("kbd", { base: { display: "inline-flex", alignItems: "center", gap: "1" } })

export interface KbdGroupProps extends ComponentProps<typeof StyledKbdGroup>, KbdVariantProps {}

export function KbdGroup(props: KbdGroupProps) {
  const [variantProps, localProps] = splitProps(props, kbd.variantKeys)
  return (
    <KbdPropsProvider value={variantProps}>
      <StyledKbdGroup {...localProps} />
    </KbdPropsProvider>
  )
}
