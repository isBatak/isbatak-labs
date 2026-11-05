import { ark } from "@ark-ui/solid/factory"
import { Switch, useSwitchContext } from "@ark-ui/solid/switch"
import { dataAttr } from "@ark-ui/solid/utils"
import { type ComponentProps, type JSX, splitProps } from "solid-js"
import { swittch } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(swittch)

export const SwitchRoot = withProvider(Switch.Root, "root")
export type SwitchRootProps = ComponentProps<typeof SwitchRoot>

export const SwitchRootProvider = withProvider(Switch.RootProvider, "root")
export type SwitchRootProviderProps = ComponentProps<typeof SwitchRootProvider>

export const SwitchLabel = withContext(Switch.Label, "label")
export type SwitchLabelProps = ComponentProps<typeof SwitchLabel>

export const SwitchControl = withContext(Switch.Control, "control")
export type SwitchControlProps = ComponentProps<typeof SwitchControl>

export const SwitchThumb = withContext(Switch.Thumb, "thumb")
export type SwitchThumbProps = ComponentProps<typeof SwitchThumb>

interface SwitchStateContentProps extends ComponentProps<typeof ark.span> {
  fallback?: JSX.Element | undefined
}

function SwitchStateContent(props: SwitchStateContentProps) {
  const api = useSwitchContext()
  const [local, rest] = splitProps(props, ["fallback", "children"])
  return (
    <ark.span data-checked={dataAttr(api().checked)} {...rest}>
      {api().checked ? local.children : local.fallback}
    </ark.span>
  )
}

export const SwitchIndicator = withContext(SwitchStateContent, "indicator")
export type SwitchIndicatorProps = ComponentProps<typeof SwitchIndicator>

export const SwitchThumbIndicator = SwitchStateContent
export type SwitchThumbIndicatorProps = SwitchStateContentProps

export const SwitchHiddenInput = Switch.HiddenInput
export type SwitchHiddenInputProps = Switch.HiddenInputProps

export const SwitchContext = Switch.Context
export type SwitchContextProps = Switch.ContextProps
