import { ark } from "@ark-ui/vue/factory"
import { Switch, useSwitchContext } from "@ark-ui/vue/switch"
import { dataAttr } from "@ark-ui/vue/utils"
import { swittch } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, type HTMLAttributes, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

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

const SwitchStateContent = defineComponent({
  name: "SwitchStateContent",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const api = useSwitchContext()
    return () =>
      h(ark.span, { "data-checked": dataAttr(api.value.checked), ...attrs }, () =>
        api.value.checked ? slots.default?.() : slots.fallback?.(),
      )
  },
}) as unknown as FunctionalComponent<HTMLAttributes>

export const SwitchIndicator = withContext(SwitchStateContent, "indicator")
export type SwitchIndicatorProps = ComponentProps<typeof SwitchIndicator>

export const SwitchThumbIndicator = SwitchStateContent
export type SwitchThumbIndicatorProps = HTMLAttributes

export const SwitchHiddenInput = Switch.HiddenInput
export type SwitchHiddenInputProps = Switch.HiddenInputProps

export const SwitchContext = Switch.Context
export type SwitchContextProps = Switch.ContextProps
