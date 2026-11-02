import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import type { Assign } from "../types"
import type { UseSearchInputReturn } from "./use-search-input"
import { SearchInputProvider } from "./use-search-input-context"

interface RootProviderProps {
  value: UseSearchInputReturn
}

export interface SearchInputRootProviderBaseProps extends RootProviderProps, PolymorphicProps<"div"> {}
export interface SearchInputRootProviderProps extends Assign<HTMLProps<"div">, SearchInputRootProviderBaseProps> {}

export const SearchInputRootProvider = (props: SearchInputRootProviderProps) => {
  const [{ value: api }, localProps] = splitProps(props, ["value"])
  const mergedProps = mergeProps(() => api().getRootProps(), localProps)

  return (
    <SearchInputProvider value={api}>
      <ark.div {...mergedProps} />
    </SearchInputProvider>
  )
}
