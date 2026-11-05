import { dataAttr } from "@ark-ui/vue/utils"
import { type RadiomarkVariantProps, radiomark } from "@isbatak/panda-ds/recipes"
import { type FunctionalComponent, type HTMLAttributes, h } from "vue"

export interface RadiomarkProps extends HTMLAttributes, RadiomarkVariantProps {
  checked?: boolean | undefined
  disabled?: boolean | undefined
}

export const Radiomark: FunctionalComponent<RadiomarkProps> = (props) => {
  const [variantProps, { checked, disabled, class: className, ...rest }] = radiomark.splitVariantProps(props)
  return h(
    "span",
    {
      "data-state": checked ? "checked" : "unchecked",
      "data-disabled": dataAttr(disabled),
      ...rest,
      class: [radiomark(variantProps), className],
    },
    checked ? h("span", { class: "dot" }) : undefined,
  )
}
