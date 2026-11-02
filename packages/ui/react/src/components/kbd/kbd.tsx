"use client"

import { createRecipeContext, styled } from "@isbatak/panda-ds/jsx"
import { type KbdVariantProps, kbd } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "react"

const { withContext, PropsProvider } = createRecipeContext(kbd)

export const Kbd = withContext("kbd")
export type KbdProps = ComponentProps<typeof Kbd>

export const KbdPropsProvider = PropsProvider

const StyledKbdGroup = styled("kbd", { base: { display: "inline-flex", alignItems: "center", gap: "1" } })

export interface KbdGroupProps extends ComponentProps<typeof StyledKbdGroup>, KbdVariantProps {}

export function KbdGroup(props: KbdGroupProps) {
  const [variantProps, localProps] = kbd.splitVariantProps(props)
  return (
    <KbdPropsProvider value={variantProps}>
      <StyledKbdGroup {...localProps} />
    </KbdPropsProvider>
  )
}
