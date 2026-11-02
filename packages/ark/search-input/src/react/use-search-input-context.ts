import { createContext } from "@ark-ui/react/utils"
import type { UseSearchInputReturn } from "./use-search-input"

export interface UseSearchInputContext extends UseSearchInputReturn {}

export const [SearchInputProvider, useSearchInputContext] = createContext<UseSearchInputContext>({
  name: "SearchInputContext",
  hookName: "useSearchInputContext",
  providerName: "<SearchInputProvider />",
})
