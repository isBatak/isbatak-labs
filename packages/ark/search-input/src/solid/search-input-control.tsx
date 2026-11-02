import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputControlBaseProps extends PolymorphicProps<"div"> {}
export interface SearchInputControlProps extends HTMLProps<"div">, SearchInputControlBaseProps {}

export const SearchInputControl = (props: SearchInputControlProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(() => api().getControlProps(), props)

  return <ark.div {...mergedProps} />
}
