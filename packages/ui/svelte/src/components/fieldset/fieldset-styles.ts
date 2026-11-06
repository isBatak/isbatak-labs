import type { fieldset } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useFieldsetStyles, provideFieldsetStyles] = createContext<() => ReturnType<typeof fieldset>>()
