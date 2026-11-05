import { ark } from "@ark-ui/vue/factory"
import { type FunctionalComponent, type HTMLAttributes, defineComponent, h } from "vue"

export interface StartIconProps extends HTMLAttributes {
  asChild?: boolean | undefined
}

export interface EndIconProps extends HTMLAttributes {
  asChild?: boolean | undefined
}

export const StartIcon = defineComponent({
  name: "StartIcon",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(ark.span, { "data-icon-start": "", "aria-hidden": "true", ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<StartIconProps>

export const EndIcon = defineComponent({
  name: "EndIcon",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(ark.span, { "data-icon-end": "", "aria-hidden": "true", ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<EndIconProps>
