import type { menubar } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useMenubarStyles, provideMenubarStyles] = createContext<() => ReturnType<typeof menubar>>()
