import type { scrollArea } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useScrollAreaStyles, provideScrollAreaStyles] = createContext<() => ReturnType<typeof scrollArea>>()
