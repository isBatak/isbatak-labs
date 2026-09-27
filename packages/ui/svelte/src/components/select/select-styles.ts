import type { select } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSelectStyles, provideSelectStyles] = createContext<() => ReturnType<typeof select>>()
