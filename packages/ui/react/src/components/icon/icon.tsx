import type { ComponentProps } from "react"
import { type IconName, spriteUrl } from "@isbatak/icons"
import { styled } from "@isbatak/panda-ds/jsx"
import { icon } from "@isbatak/panda-ds/recipes"

const StyledIcon = styled("svg", icon)

export interface IconProps extends ComponentProps<typeof StyledIcon> {
  name: IconName
}

export function Icon({ name, ...props }: IconProps) {
  return (
    <StyledIcon aria-hidden data-name={name} {...props}>
      <use href={`${spriteUrl}#${name}`} />
    </StyledIcon>
  )
}
