import type { tag } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTagStyles, provideTagStyles] = createContext<() => ReturnType<typeof tag>>()
