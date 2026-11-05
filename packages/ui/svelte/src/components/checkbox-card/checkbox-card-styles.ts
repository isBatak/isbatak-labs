import type { checkboxCard } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useCheckboxCardStyles, provideCheckboxCardStyles] = createContext<() => ReturnType<typeof checkboxCard>>()
