import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputLabelBaseProps extends PolymorphicProps {}
export interface SearchInputLabelProps
  extends HTMLProps<"label">, SearchInputLabelBaseProps, RefAttributes<HTMLLabelElement> {}

export const SearchInputLabel = (props: SearchInputLabelProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(api.getLabelProps(), props)

  return <ark.label {...mergedProps} />
}
