import type { field } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useFieldStyles, provideFieldStyles] = createContext<() => ReturnType<typeof field>>()
