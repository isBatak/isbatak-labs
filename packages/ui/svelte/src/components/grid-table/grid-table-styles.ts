import type { gridTable } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useGridTableStyles, provideGridTableStyles] = createContext<() => ReturnType<typeof gridTable>>()
