import type { ButtonVariantProps } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useButtonProps, provideButtonProps, hasButtonProps] = createContext<() => ButtonVariantProps>()
