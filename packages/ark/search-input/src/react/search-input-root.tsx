import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import * as searchInput from "../core"
import type { Assign } from "../types"
import { useSearchInput, type UseSearchInputProps } from "./use-search-input"
import { SearchInputProvider } from "./use-search-input-context"

export interface SearchInputRootBaseProps extends UseSearchInputProps, PolymorphicProps {}
export interface SearchInputRootProps
  extends Assign<HTMLProps<"div">, SearchInputRootBaseProps>, RefAttributes<HTMLDivElement> {}

export const SearchInputRoot = (props: SearchInputRootProps) => {
  const [useSearchInputProps, localProps] = searchInput.splitProps(props as Omit<typeof props, "dir">)
  const api = useSearchInput(useSearchInputProps)
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <SearchInputProvider value={api}>
      <ark.div {...mergedProps} />
    </SearchInputProvider>
  )
}
