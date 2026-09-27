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

export interface ButtonProps extends ComponentProps<typeof StyledButton>, ButtonLoadingProps {}

export function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, ["loading", "loadingText", "spinner", "spinnerPlacement", "children"])
  return (
    <StyledButton
      type="button"
      {...rest}
      data-loading={dataAttr(local.loading)}
      disabled={local.loading || rest.disabled}
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
