import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputControlBaseProps extends PolymorphicProps {}
export interface SearchInputControlProps
  extends HTMLProps<"div">, SearchInputControlBaseProps, RefAttributes<HTMLDivElement> {}

export const SearchInputControl = (props: SearchInputControlProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(api.getControlProps(), props)

  return <ark.div {...mergedProps} />
}
