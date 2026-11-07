import { type HTMLArkProps, ark } from "@ark-ui/vue/factory"
import { Field } from "@ark-ui/vue/field"
import { type Component, type FunctionalComponent, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { nativeSelect } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"

import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(nativeSelect)

export const NativeSelectRoot = withProvider(ark.div, "root")
export type NativeSelectRootProps = ComponentProps<typeof NativeSelectRoot>

export const NativeSelectField = withContext(
  Field.Select as unknown as FunctionalComponent<HTMLArkProps<"select">>,
  "field",
)
export type NativeSelectFieldProps = ComponentProps<typeof NativeSelectField>

const StyledNativeSelectIndicator = withContext(ark.div, "indicator")
export type NativeSelectIndicatorProps = ComponentProps<typeof StyledNativeSelectIndicator>

export const NativeSelectIndicator = defineComponent({
  name: "NativeSelectIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledNativeSelectIndicator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-down" }))
  },
}) as unknown as typeof StyledNativeSelectIndicator
