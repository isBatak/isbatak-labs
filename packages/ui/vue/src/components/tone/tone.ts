import { ark } from "@ark-ui/vue/factory"
import { tone } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type Component, computed, defineComponent, h, inject, provide, type ComputedRef } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Icon } from "../icon"
import type { ToneType } from "./detect-tone"

const toneKey = Symbol("tone")

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(tone)

const StyledToneRoot = withProvider(ark.span, "root")
export type ToneRootProps = ComponentProps<typeof StyledToneRoot>

export const ToneRoot = defineComponent({
  name: "ToneRoot",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const value = computed(() => (attrs.tone as ToneType | undefined) ?? "neutral")
    provide(toneKey, value)
    return () => h(StyledToneRoot as Component, { "data-tone": value.value, ...attrs }, slots)
  },
}) as unknown as typeof StyledToneRoot

export const TonePropsProvider = PropsProvider

export function useToneContext() {
  return inject<ComputedRef<ToneType>>(
    toneKey,
    computed(() => "neutral"),
  )
}

const StyledToneIndicator = withContext(ark.span, "indicator")
export type ToneIndicatorProps = ComponentProps<typeof StyledToneIndicator>

export const ToneIndicator = defineComponent({
  name: "ToneIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const value = useToneContext()
    return () =>
      h(
        StyledToneIndicator as Component,
        { "data-tone": value.value, ...attrs },
        slots.default
          ? slots
          : () =>
              value.value === "neutral"
                ? h("svg", { "aria-hidden": "true" })
                : h(Icon, { name: value.value === "positive" ? "caret-up-filled" : "caret-down-filled" }),
      )
  },
}) as unknown as typeof StyledToneIndicator
