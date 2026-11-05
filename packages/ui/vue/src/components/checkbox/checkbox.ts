import { Checkbox, useCheckboxContext } from "@ark-ui/vue/checkbox"
import { checkbox } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext, styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext } = createSlotRecipeContext(checkbox)

export const CheckboxRoot = withProvider(Checkbox.Root, "root")
export type CheckboxRootProps = ComponentProps<typeof CheckboxRoot>

export const CheckboxRootProvider = withProvider(Checkbox.RootProvider, "root")
export type CheckboxRootProviderProps = ComponentProps<typeof CheckboxRootProvider>

export const CheckboxLabel = withContext(Checkbox.Label, "label")
export type CheckboxLabelProps = ComponentProps<typeof CheckboxLabel>

const CheckboxMark = defineComponent({
  name: "CheckboxMark",
  setup() {
    const api = useCheckboxContext()
    return () => {
      const { checked, indeterminate } = api.value
      return h(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "3px",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true",
        },
        indeterminate
          ? h("path", { d: "M5 12h14" })
          : checked
            ? h("polyline", { points: "20 6 9 17 4 12" })
            : undefined,
      )
    }
  },
})

export const CheckboxIndicator = withContext(CheckboxMark, "indicator")
export type CheckboxIndicatorProps = ComponentProps<typeof CheckboxIndicator>

const StyledCheckboxControl = withContext(Checkbox.Control, "control")

export type CheckboxControlProps = ComponentProps<typeof StyledCheckboxControl>
export const CheckboxControl: FunctionalComponent<CheckboxControlProps> = (props, { slots }) =>
  h(StyledCheckboxControl, props, () => slots.default?.() ?? h(CheckboxIndicator))

export const CheckboxGroup = styled(Checkbox.Group, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
  },
})
export type CheckboxGroupProps = ComponentProps<typeof CheckboxGroup>

export const CheckboxHiddenInput = Checkbox.HiddenInput
export type CheckboxHiddenInputProps = Checkbox.HiddenInputProps

export const CheckboxContext = Checkbox.Context
export type CheckboxContextProps = Checkbox.ContextProps
