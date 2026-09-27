import { AbsoluteCenter, styled } from "@isbatak/ui-vue/jsx"
import { defineComponent, h, type PropType } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Spinner } from "../spinner"

const Contents = styled("span", { base: { display: "contents" } })

const HiddenContents = styled("span", { base: { display: "contents", visibility: "hidden" } })

export const Loader = defineComponent({
  name: "Loader",
  props: {
    visible: { type: Boolean, default: true },
    spinnerPlacement: { type: String as PropType<"start" | "end">, default: "start" },
    text: String,
  },
  setup(props, { slots }) {
    return () => {
      if (!props.visible) return slots.default?.()

      const spinner = slots.spinner?.() ?? h(Spinner, { size: "inherit", borderWidth: "0.125em", color: "inherit" })

      if (props.text) {
        return h(Contents, null, () => [
          props.spinnerPlacement === "start" && spinner,
          props.text,
          props.spinnerPlacement === "end" && spinner,
        ])
      }

      return h(Contents, null, () => [
        h(AbsoluteCenter, { as: "span", display: "inline-flex" }, () => spinner),
        h(HiddenContents, null, () => slots.default?.()),
      ])
    }
  },
})

export type LoaderProps = ComponentProps<typeof Loader>
