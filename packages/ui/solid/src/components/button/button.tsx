import { ark, type HTMLArkProps } from "@ark-ui/solid/factory"
import { dataAttr } from "@ark-ui/solid/utils"
import { createRecipeContext } from "@isbatak/solid-ui/jsx"
import { button } from "@isbatak/panda-ds/recipes"
import { type Component, type ComponentProps, type JSX, Show, splitProps } from "solid-js"

import { Loader } from "../loader"

const { withContext, PropsProvider } = createRecipeContext(button)

const StyledButton = withContext(ark.button as Component<HTMLArkProps<"button">>)

export interface ButtonLoadingProps {
  loading?: boolean | undefined
  loadingText?: JSX.Element | undefined
  spinner?: JSX.Element | undefined
  spinnerPlacement?: "start" | "end" | undefined
}

export interface ButtonProps extends ComponentProps<typeof StyledButton>, ButtonLoadingProps {
  /**
   * Use `aria-disabled` instead of the native `disabled` attribute, so the button stays focusable and announced while
   * disabled. Clicks are blocked while it's disabled.
   * @default false
   */
  accessibleWhenDisabled?: boolean | undefined
}

const blockClick = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()
}

export function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, [
    "loading",
    "loadingText",
    "spinner",
    "spinnerPlacement",
    "accessibleWhenDisabled",
    "disabled",
    "onClick",
    "children",
  ])
  const disabled = () => local.loading || local.disabled
  const accessiblyDisabled = () => Boolean(local.accessibleWhenDisabled && disabled())
  return (
    <StyledButton
      type="button"
      {...rest}
      data-loading={dataAttr(local.loading)}
      data-disabled={dataAttr(disabled())}
      disabled={local.accessibleWhenDisabled ? undefined : disabled()}
      aria-disabled={accessiblyDisabled() || undefined}
      onClick={accessiblyDisabled() ? blockClick : local.onClick}
    >
      <Show when={!rest.asChild && local.loading} fallback={local.children}>
        <Loader spinner={local.spinner} text={local.loadingText} spinnerPlacement={local.spinnerPlacement}>
          {local.children}
        </Loader>
      </Show>
    </StyledButton>
  )
}

export const ButtonPropsProvider = PropsProvider
