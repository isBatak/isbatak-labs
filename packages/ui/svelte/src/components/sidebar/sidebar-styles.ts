import type { sidebar } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSidebarStyles, provideSidebarStyles] = createContext<() => ReturnType<typeof sidebar>>()
