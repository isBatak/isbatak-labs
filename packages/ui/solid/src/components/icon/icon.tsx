import { type IconName, getIconSprite } from "@isbatak/icons"
import { styled } from "@isbatak/solid-ui/jsx"
import { icon } from "@isbatak/panda-ds/recipes"
import { type ComponentProps, splitProps } from "solid-js"

const StyledIcon = styled("svg", icon)

export interface IconProps extends ComponentProps<typeof StyledIcon> {
  name: IconName
}

export function Icon(props: IconProps) {
  const [local, rest] = splitProps(props, ["name"])
  return (
    <StyledIcon aria-hidden="true" data-name={local.name} {...rest}>
      <use href={`${getIconSprite()}#${local.name}`} />
    </StyledIcon>
  )
}

export function IconSpritePreload() {
  return <link rel="preload" as="image" type="image/svg+xml" href={getIconSprite()} />
}
