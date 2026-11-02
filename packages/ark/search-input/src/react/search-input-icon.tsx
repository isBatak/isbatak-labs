import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputIconBaseProps extends PolymorphicProps {}
export interface SearchInputIconProps
  extends HTMLProps<"div">, SearchInputIconBaseProps, RefAttributes<HTMLDivElement> {}

export const SearchInputIcon = (props: SearchInputIconProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(api.getIconProps(), props)

  return <ark.div {...mergedProps} />
}
