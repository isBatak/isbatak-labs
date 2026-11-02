import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputIconBaseProps extends PolymorphicProps<"div"> {}
export interface SearchInputIconProps extends HTMLProps<"div">, SearchInputIconBaseProps {}

export const SearchInputIcon = (props: SearchInputIconProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(() => api().getIconProps(), props)

  return <ark.div {...mergedProps} />
}
