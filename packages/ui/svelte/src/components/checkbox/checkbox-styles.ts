import type { checkbox } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useCheckboxStyles, provideCheckboxStyles] = createContext<() => ReturnType<typeof checkbox>>()
