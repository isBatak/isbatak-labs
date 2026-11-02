import type { KbdVariantProps } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useKbdProps, provideKbdProps, hasKbdProps] = createContext<() => KbdVariantProps>()
