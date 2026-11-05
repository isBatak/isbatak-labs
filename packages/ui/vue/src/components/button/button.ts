import { ark, type HTMLArkProps } from "@ark-ui/vue/factory"
import { dataAttr } from "@ark-ui/vue/utils"
import { createRecipeContext } from "@isbatak/vue-ui/jsx"
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

const blockClick = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()
}

export const Button = defineComponent({
  name: "Button",
  inheritAttrs: false,
  props: {
    accessibleWhenDisabled: Boolean,
    asChild: Boolean,
    disabled: { type: Boolean, default: undefined },
    loading: { type: Boolean, default: undefined },
    loadingText: String,
    spinnerPlacement: String as PropType<"start" | "end">,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const disabled = props.loading || props.disabled
      const accessiblyDisabled = props.accessibleWhenDisabled && disabled
      return h(
        StyledButton,
        {
          type: "button",
          ...attrs,
          asChild: props.asChild,
          "data-loading": dataAttr(props.loading),
          "data-disabled": dataAttr(disabled),
          disabled: props.accessibleWhenDisabled ? undefined : disabled,
          "aria-disabled": accessiblyDisabled || undefined,
          onClick: accessiblyDisabled ? blockClick : (attrs.onClick as ((event: MouseEvent) => void) | undefined),
        },
        () =>
          !props.asChild && props.loading
            ? h(
                Loader,
                {
                  ...(props.loadingText !== undefined && { text: props.loadingText }),
                  spinnerPlacement: props.spinnerPlacement ?? "start",
                },
                { default: slots.default, spinner: slots.spinner },
              )
            : slots.default?.(),
      )
    }
  },
})

export type ButtonProps = ComponentProps<typeof StyledButton> &
  ButtonLoadingProps & {
    /**
     * Use `aria-disabled` instead of the native `disabled` attribute, so the button stays focusable and announced
     * while disabled. Clicks are blocked while it's disabled.
     * @default false
     */
    accessibleWhenDisabled?: boolean | undefined
  }

export const ButtonPropsProvider = PropsProvider
