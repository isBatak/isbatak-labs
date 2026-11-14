import type { emptyState } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useEmptyStateStyles, provideEmptyStateStyles] = createContext<() => ReturnType<typeof emptyState>>()
