import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputInputBaseProps extends PolymorphicProps<"input"> {}
export interface SearchInputInputProps extends HTMLProps<"input">, SearchInputInputBaseProps {}

export const SearchInputInput = (props: SearchInputInputProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(() => api().getInputProps(), props)

  return <ark.input {...mergedProps} />
}
