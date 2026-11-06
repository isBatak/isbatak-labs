import type { searchInput } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSearchInputStyles, provideSearchInputStyles] = createContext<() => ReturnType<typeof searchInput>>()
