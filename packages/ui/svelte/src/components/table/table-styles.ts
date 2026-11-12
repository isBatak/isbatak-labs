import type { table } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTableStyles, provideTableStyles] = createContext<() => ReturnType<typeof table>>()
