import { dataAttr } from "@ark-ui/vue/utils"
import { type CheckmarkVariantProps, checkmark } from "@isbatak/panda-ds/recipes"
import { type FunctionalComponent, type SVGAttributes, h } from "vue"

export interface CheckmarkProps extends SVGAttributes, CheckmarkVariantProps {
  checked?: boolean | undefined
  indeterminate?: boolean | undefined
  disabled?: boolean | undefined
}

export const Checkmark: FunctionalComponent<CheckmarkProps> = (props) => {
  const [variantProps, { checked, indeterminate, disabled, class: className, ...rest }] =
    checkmark.splitVariantProps(props)
  return h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "3px",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "data-state": indeterminate ? "indeterminate" : checked ? "checked" : "unchecked",
      "data-disabled": dataAttr(disabled),
      ...rest,
      class: [checkmark(variantProps), className],
    },
    indeterminate ? h("path", { d: "M5 12h14" }) : checked ? h("polyline", { points: "20 6 9 17 4 12" }) : undefined,
  )
}
