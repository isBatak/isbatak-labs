import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputLabelBaseProps extends PolymorphicProps<"label"> {}
export interface SearchInputLabelProps extends HTMLProps<"label">, SearchInputLabelBaseProps {}

export const SearchInputLabel = (props: SearchInputLabelProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(() => api().getLabelProps(), props)

  return <ark.label {...mergedProps} />
}
