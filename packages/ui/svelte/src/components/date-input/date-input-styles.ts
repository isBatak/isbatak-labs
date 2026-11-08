import type { dateInput } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useDateInputStyles, provideDateInputStyles] = createContext<() => ReturnType<typeof dateInput>>()
