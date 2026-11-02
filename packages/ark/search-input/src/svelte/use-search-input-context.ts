import { createContext } from "@ark-ui/svelte"
import type { UseSearchInputReturn } from "./use-search-input.svelte.js"

export interface UseSearchInputContext extends UseSearchInputReturn {}

export const [SearchInputProvider, useSearchInputContext] = createContext<UseSearchInputContext>({
  name: "SearchInputContext",
})
