import type { collapsible } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useCollapsibleStyles, provideCollapsibleStyles] = createContext<() => ReturnType<typeof collapsible>>()
