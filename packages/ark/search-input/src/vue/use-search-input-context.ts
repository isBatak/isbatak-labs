import { createContext } from "@ark-ui/vue/utils"
import type { UseSearchInputReturn } from "./use-search-input"

export interface UseSearchInputContext extends UseSearchInputReturn {}

export const [SearchInputProvider, useSearchInputContext] = createContext<UseSearchInputContext>("SearchInputContext")
