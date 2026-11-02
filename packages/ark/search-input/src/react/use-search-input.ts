import { useLocaleContext } from "@ark-ui/react/locale"
import { normalizeProps, type PropTypes } from "@zag-js/react"
import { useId, useState } from "react"
import * as searchInput from "../core"
import type { Optional } from "../types"

export interface UseSearchInputProps extends Optional<Omit<searchInput.Props, "dir">, "id"> {}

export interface UseSearchInputReturn extends searchInput.Api<PropTypes> {}

export const useSearchInput = (props: UseSearchInputProps = {}): UseSearchInputReturn => {
  const id = useId()
  const { dir } = useLocaleContext()
  const resolved: searchInput.Props = { id, dir, ...props }
  const [state, setState] = useState(() => searchInput.getInitialState(resolved))

  return searchInput.connect(resolved, state, (patch) => setState((prev) => ({ ...prev, ...patch })), normalizeProps)
}
