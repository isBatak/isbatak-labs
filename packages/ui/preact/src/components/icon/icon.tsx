import { type IconName, getIconSprite } from "@isbatak/icons"
import { cx } from "@isbatak/panda-ds/css"
import { icon, type IconVariantProps } from "@isbatak/panda-ds/recipes"
import type { SVGAttributes } from "preact"

export interface IconProps
  extends Omit<SVGAttributes<SVGSVGElement>, "name" | "class" | "className">, IconVariantProps {
  name: IconName
  class?: string | undefined
}

export function Icon({ name, class: className, ...props }: IconProps) {
  const [variantProps, localProps] = icon.splitVariantProps(props)
  return (
    <svg aria-hidden="true" data-name={name} {...localProps} class={cx(icon(variantProps), className)}>
      <use href={`${getIconSprite()}#${name}`} />
    </svg>
  )
}

export function IconSpritePreload() {
  return <link rel="preload" as="image" type="image/svg+xml" href={getIconSprite()} />
}
