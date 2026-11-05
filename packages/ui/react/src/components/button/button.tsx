"use client"

import { ark } from "@ark-ui/react/factory"
import { dataAttr } from "@ark-ui/react/utils"
import { createRecipeContext } from "@isbatak/panda-ds/jsx"
import { button } from "@isbatak/panda-ds/recipes"
import type { ComponentProps, MouseEvent, ReactNode } from "react"

import { Loader } from "../loader"

const { withContext, PropsProvider } = createRecipeContext(button)

const StyledButton = withContext(ark.button)

export interface ButtonLoadingProps {
  loading?: boolean | undefined
  loadingText?: ReactNode | undefined
  spinner?: ReactNode | undefined
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
  const { loading, loadingText, spinner, spinnerPlacement, accessibleWhenDisabled, children, ...rest } = props
  const disabled = loading || rest.disabled
  const accessiblyDisabled = Boolean(accessibleWhenDisabled && disabled)
  return (
    <StyledButton
      type="button"
      {...rest}
      data-loading={dataAttr(loading)}
      data-disabled={dataAttr(disabled)}
      disabled={accessibleWhenDisabled ? undefined : disabled}
      aria-disabled={accessiblyDisabled || undefined}
      onClick={accessiblyDisabled ? blockClick : rest.onClick}
    >
      {!rest.asChild && loading ? (
        <Loader spinner={spinner} text={loadingText} spinnerPlacement={spinnerPlacement}>
          {children}
        </Loader>
      ) : (
        children
      )}
    </StyledButton>
  )
}

export const ButtonPropsProvider = PropsProvider
