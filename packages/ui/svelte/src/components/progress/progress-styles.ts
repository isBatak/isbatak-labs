import type { ProgressVariantProps, progress } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useProgressStyles, provideProgressStyles] = createContext<() => ReturnType<typeof progress>>()
export const [useProgressProps, provideProgressProps, hasProgressProps] = createContext<() => ProgressVariantProps>()
