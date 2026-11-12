import type { card } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useCardStyles, provideCardStyles] = createContext<() => ReturnType<typeof card>>()
