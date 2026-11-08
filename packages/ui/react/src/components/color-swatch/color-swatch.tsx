import type { ComponentProps, CSSProperties } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { colorSwatch } from "@isbatak/panda-ds/recipes"

const StyledColorSwatch = styled("span", colorSwatch)

export interface ColorSwatchProps extends ComponentProps<typeof StyledColorSwatch> {
  /**
   * The color to show, as any CSS color. Transparent parts show a checkerboard.
   */
  value: string
}

export function ColorSwatch({ value, style, ...props }: ColorSwatchProps) {
  return <StyledColorSwatch {...props} style={{ "--color": value, ...style } as CSSProperties} />
}
