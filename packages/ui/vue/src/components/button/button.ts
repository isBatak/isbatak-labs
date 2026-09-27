import { ark, type HTMLArkProps } from "@ark-ui/vue/factory"
import { dataAttr } from "@ark-ui/vue/utils"
import { createRecipeContext } from "@isbatak/ui-vue/jsx"
import { button } from "@isbatak/panda-ds/recipes"
import { type FunctionalComponent, defineComponent, h, type PropType } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Loader } from "../loader"

const { withContext, PropsProvider } = createRecipeContext(button)

const StyledButton = withContext(ark.button as unknown as FunctionalComponent<HTMLArkProps<"button">>)

export interface ButtonLoadingProps {
  loading?: boolean | undefined
  loadingText?: string | undefined
  spinnerPlacement?: "start" | "end" | undefined
}

export const Button = defineComponent({
  name: "Button",
  props: {
    asChild: Boolean,
    disabled: { type: Boolean, default: undefined },
    loading: { type: Boolean, default: undefined },
    loadingText: String,
    spinnerPlacement: String as PropType<"start" | "end">,
  },
  setup(props, { slots }) {
    return () =>
      h(
        StyledButton,
        {
          type: "button",
          asChild: props.asChild,
          "data-loading": dataAttr(props.loading),
          disabled: props.loading || props.disabled,
        },
        () =>
          !props.asChild && props.loading
            ? h(
                Loader,
                { text: props.loadingText, spinnerPlacement: props.spinnerPlacement },
                { default: slots.default, spinner: slots.spinner },
              )
            : slots.default?.(),
      )
  },
})

export type ButtonProps = ComponentProps<typeof StyledButton> & ButtonLoadingProps

export const ButtonPropsProvider = PropsProvider
