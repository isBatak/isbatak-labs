import { type ComponentProps, type JSX, splitProps } from "solid-js"
import { styled } from "@isbatak/solid-ui/jsx"
import { colorSwatch } from "@isbatak/panda-ds/recipes"

const StyledColorSwatch = styled("span", colorSwatch)

export type ColorSwatchProps = ComponentProps<typeof StyledColorSwatch> & {
  value: string
}

export function ColorSwatch(props: ColorSwatchProps) {
  const [local, rest] = splitProps(props, ["value", "style"])
  return (
    <StyledColorSwatch
      {...rest}
      style={{ "--color": local.value, ...(local.style as JSX.CSSProperties | undefined) }}
    />
  )
}
