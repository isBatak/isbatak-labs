export type { IconName } from "../generated/types/icon-name"
export { icons as iconNames } from "../generated/icons"

export const spriteUrl = new URL("../generated/sprite.svg", import.meta.url).href
