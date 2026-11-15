import type { swap } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSwapStyles, provideSwapStyles] = createContext<() => ReturnType<typeof swap>>()
