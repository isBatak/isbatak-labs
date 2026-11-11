import type { treeView } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTreeViewStyles, provideTreeViewStyles] = createContext<() => ReturnType<typeof treeView>>()
