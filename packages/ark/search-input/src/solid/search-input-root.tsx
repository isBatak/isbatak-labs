import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import * as searchInput from "../core"
import type { Assign } from "../types"
import { useSearchInput, type UseSearchInputProps } from "./use-search-input"
import { SearchInputProvider } from "./use-search-input-context"

export interface SearchInputRootBaseProps extends UseSearchInputProps, PolymorphicProps<"div"> {}
export interface SearchInputRootProps extends Assign<HTMLProps<"div">, SearchInputRootBaseProps> {}

export const SearchInputRoot = (props: SearchInputRootProps) => {
  const [useSearchInputProps, localProps] = splitProps(props, searchInput.props as (keyof SearchInputRootProps)[])
  const api = useSearchInput(() => useSearchInputProps as UseSearchInputProps)
  const mergedProps = mergeProps(() => api().getRootProps(), localProps)

  return (
    <SearchInputProvider value={api}>
      <ark.div {...mergedProps} />
    </SearchInputProvider>
  )
}
