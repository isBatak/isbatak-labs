import type { toc } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTocStyles, provideTocStyles] = createContext<() => ReturnType<typeof toc>>()
