import type { listbox } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useListboxStyles, provideListboxStyles] = createContext<() => ReturnType<typeof listbox>>()
