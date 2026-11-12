import type { StatVariantProps, stat } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useStatStyles, provideStatStyles] = createContext<() => ReturnType<typeof stat>>()
export const [useStatProps, provideStatProps, hasStatProps] = createContext<() => StatVariantProps>()
