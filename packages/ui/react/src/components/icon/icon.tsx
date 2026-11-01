import type { ComponentProps } from "react"
import { preload } from "react-dom"
import { type IconName, getIconSprite } from "@isbatak/icons"
import { styled } from "@isbatak/panda-ds/jsx"
import { icon } from "@isbatak/panda-ds/recipes"

const StyledIcon = styled("svg", icon)

export interface IconProps extends ComponentProps<typeof StyledIcon> {
  name: IconName
}

export function Icon({ name, ...props }: IconProps) {
  return (
    <StyledIcon aria-hidden data-name={name} {...props}>
      <use href={`${getIconSprite()}#${name}`} />
    </StyledIcon>
  )
}

export function IconSpritePreload() {
  preload(getIconSprite(), { as: "image", type: "image/svg+xml" })
  return null
}
