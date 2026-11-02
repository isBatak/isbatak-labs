import { createContext } from "@ark-ui/solid/utils"
import type { UseSearchInputReturn } from "./use-search-input"

export interface UseSearchInputContext extends UseSearchInputReturn {}

export const [SearchInputProvider, useSearchInputContext] = createContext<UseSearchInputContext>({
  hookName: "useSearchInputContext",
  providerName: "<SearchInputProvider />",
})
