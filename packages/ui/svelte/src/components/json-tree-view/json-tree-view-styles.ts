import type { jsonTreeView } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useJsonTreeViewStyles, provideJsonTreeViewStyles] = createContext<() => ReturnType<typeof jsonTreeView>>()
