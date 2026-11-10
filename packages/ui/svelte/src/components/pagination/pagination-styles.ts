import type { pagination } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [usePaginationStyles, providePaginationStyles] = createContext<() => ReturnType<typeof pagination>>()
