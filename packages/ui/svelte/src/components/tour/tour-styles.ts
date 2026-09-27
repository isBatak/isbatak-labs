import type { tour } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTourStyles, provideTourStyles] = createContext<() => ReturnType<typeof tour>>()
