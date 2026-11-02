import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputClearTriggerBaseProps extends PolymorphicProps {}
export interface SearchInputClearTriggerProps
  extends HTMLProps<"button">, SearchInputClearTriggerBaseProps, RefAttributes<HTMLButtonElement> {}

export const SearchInputClearTrigger = (props: SearchInputClearTriggerProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(api.getClearTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
