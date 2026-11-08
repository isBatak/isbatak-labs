import type { combobox } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useComboboxStyles, provideComboboxStyles] = createContext<() => ReturnType<typeof combobox>>()
