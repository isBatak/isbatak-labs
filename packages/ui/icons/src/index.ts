import type { IconName as BuiltinIconName } from "../generated/types/icon-name"

export type { BuiltinIconName }
export { icons as iconNames } from "../generated/icons"

export const componentIconNames = [
  "check",
  "chevron-down",
  "close",
  "lock",
  "search",
  "view",
  "view-off",
] as const satisfies readonly BuiltinIconName[]

export type ComponentIconName = (typeof componentIconNames)[number]

export interface IconRegistry {}

export type IconName = IconRegistry extends { iconName: infer Name extends string }
  ? Name | ComponentIconName
  : BuiltinIconName

export const spriteUrl = new URL("../generated/sprite.svg", import.meta.url).href

let currentSprite = spriteUrl

export function setIconSprite(url: string) {
  currentSprite = url
}

export function getIconSprite() {
  return currentSprite
}

export function preloadIconSprite(href = getIconSprite()) {
  if (typeof document === "undefined") return
  if (document.head.querySelector(`link[rel="preload"][href="${CSS.escape(href)}"]`)) return
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "image"
  link.type = "image/svg+xml"
  link.href = href
  document.head.append(link)
}
