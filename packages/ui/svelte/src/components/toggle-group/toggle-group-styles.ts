import type { toggleGroup } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useToggleGroupStyles, provideToggleGroupStyles] = createContext<() => ReturnType<typeof toggleGroup>>()
