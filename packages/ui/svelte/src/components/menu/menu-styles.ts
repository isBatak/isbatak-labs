import type { menu } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useMenuStyles, provideMenuStyles] = createContext<() => ReturnType<typeof menu>>()
