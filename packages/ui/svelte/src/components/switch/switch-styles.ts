import type { swittch } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSwitchStyles, provideSwitchStyles] = createContext<() => ReturnType<typeof swittch>>()
