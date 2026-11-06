import type { numberInput } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useNumberInputStyles, provideNumberInputStyles] = createContext<() => ReturnType<typeof numberInput>>()
