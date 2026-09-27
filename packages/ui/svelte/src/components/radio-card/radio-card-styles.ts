import type { radioCard } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useRadioCardStyles, provideRadioCardStyles] = createContext<() => ReturnType<typeof radioCard>>()
