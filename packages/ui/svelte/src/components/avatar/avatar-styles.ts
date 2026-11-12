import type { AvatarVariantProps, avatar } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useAvatarStyles, provideAvatarStyles] = createContext<() => ReturnType<typeof avatar>>()
export const [useAvatarProps, provideAvatarProps, hasAvatarProps] = createContext<() => AvatarVariantProps>()
