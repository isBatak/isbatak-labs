import type { splitter } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSplitterStyles, provideSplitterStyles] = createContext<() => ReturnType<typeof splitter>>()
