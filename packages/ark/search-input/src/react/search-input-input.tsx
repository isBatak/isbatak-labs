import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useSearchInputContext } from "./use-search-input-context"

export interface SearchInputInputBaseProps extends PolymorphicProps {}
export interface SearchInputInputProps
  extends HTMLProps<"input">, SearchInputInputBaseProps, RefAttributes<HTMLInputElement> {}

export const SearchInputInput = (props: SearchInputInputProps) => {
  const api = useSearchInputContext()
  const mergedProps = mergeProps(api.getInputProps(), props)

  return <ark.input {...mergedProps} />
}
