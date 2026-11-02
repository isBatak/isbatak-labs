import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputClearTriggerBaseProps extends PolymorphicProps<"button"> {}
export interface SearchInputClearTriggerProps extends HTMLProps<"button">, SearchInputClearTriggerBaseProps {}

export const SearchInputClearTrigger = (props: SearchInputClearTriggerProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(() => api().getClearTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
