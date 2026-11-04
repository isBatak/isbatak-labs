import type { list } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useListStyles, provideListStyles] = createContext<() => ReturnType<typeof list>>()
