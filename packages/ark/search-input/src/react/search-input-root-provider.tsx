import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import type { Assign } from "../types"
import type { UseSearchInputReturn } from "./use-search-input"
import { SearchInputProvider } from "./use-search-input-context"

interface RootProviderProps {
  value: UseSearchInputReturn
}

export interface SearchInputRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface SearchInputRootProviderProps
  extends Assign<HTMLProps<"div">, SearchInputRootProviderBaseProps>, RefAttributes<HTMLDivElement> {}

export const SearchInputRootProvider = (props: SearchInputRootProviderProps) => {
  const { value: api, ...localProps } = props
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <SearchInputProvider value={api}>
      <ark.div {...mergedProps} />
    </SearchInputProvider>
  )
}
