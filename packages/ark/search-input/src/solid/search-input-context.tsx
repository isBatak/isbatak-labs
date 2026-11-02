import type { JSX } from "solid-js"
import { type UseSearchInputContext, useSearchInputContext } from "./use-search-input-context"

export interface SearchInputContextProps {
  children: (context: UseSearchInputContext) => JSX.Element
}

export const SearchInputContext = (props: SearchInputContextProps) => props.children(useSearchInputContext())
