import type { drawer } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useDrawerStyles, provideDrawerStyles] = createContext<() => ReturnType<typeof drawer>>()
