import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { separator } from "@isbatak/panda-ds/recipes"

const StyledSeparator = styled(ark.span, separator)

export type SeparatorProps = ComponentProps<typeof StyledSeparator>

export function Separator({ orientation = "horizontal", ...props }: SeparatorProps) {
  const fixed = typeof orientation === "string"
  return (
    <StyledSeparator
      role={fixed ? "separator" : "presentation"}
      aria-orientation={fixed ? orientation : undefined}
      orientation={orientation}
      {...props}
    />
  )
}
