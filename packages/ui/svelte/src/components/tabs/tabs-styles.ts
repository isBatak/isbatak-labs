import type { tabs } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTabsStyles, provideTabsStyles] = createContext<() => ReturnType<typeof tabs>>()
