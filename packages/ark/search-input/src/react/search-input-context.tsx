import type { ReactNode } from "react"
import { type UseSearchInputContext, useSearchInputContext } from "./use-search-input-context"

export interface SearchInputContextProps {
  children: (context: UseSearchInputContext) => ReactNode
}

export const SearchInputContext = (props: SearchInputContextProps) => props.children(useSearchInputContext())
