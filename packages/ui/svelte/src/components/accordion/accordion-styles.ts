import type { accordion } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useAccordionStyles, provideAccordionStyles] = createContext<() => ReturnType<typeof accordion>>()
