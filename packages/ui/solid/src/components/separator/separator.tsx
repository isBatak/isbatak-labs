import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, mergeProps, splitProps } from "solid-js"
import { separator } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledSeparator = styled(ark.span, separator)

export type SeparatorProps = ComponentProps<typeof StyledSeparator>

export function Separator(props: SeparatorProps) {
  const merged = mergeProps({ orientation: "horizontal" as const }, props)
  const [local, rest] = splitProps(merged, ["orientation"])
  const fixed = () => typeof local.orientation === "string"
  return (
    <StyledSeparator
      role={fixed() ? "separator" : "presentation"}
      aria-orientation={fixed() ? (local.orientation as "horizontal" | "vertical") : undefined}
      orientation={local.orientation}
      {...rest}
    />
  )
}
