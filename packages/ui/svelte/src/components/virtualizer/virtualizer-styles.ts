import type { virtualizer } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useVirtualizerStyles, provideVirtualizerStyles] = createContext<() => ReturnType<typeof virtualizer>>()
