"use client"

import { ark } from "@ark-ui/react/factory"
import { dataAttr } from "@ark-ui/react/utils"
import { createRecipeContext } from "@isbatak/panda-ds/jsx"
import { button } from "@isbatak/panda-ds/recipes"
import type { ComponentProps, ReactNode } from "react"

import { Loader } from "../loader"

const { withContext, PropsProvider } = createRecipeContext(button)

const StyledButton = withContext(ark.button)

export interface ButtonLoadingProps {
  loading?: boolean | undefined
  loadingText?: ReactNode | undefined
  spinner?: ReactNode | undefined
  spinnerPlacement?: "start" | "end" | undefined
}

export interface ButtonProps extends ComponentProps<typeof StyledButton>, ButtonLoadingProps {}

export function Button(props: ButtonProps) {
  const { loading, loadingText, spinner, spinnerPlacement, children, ...rest } = props
  return (
    <StyledButton type="button" {...rest} data-loading={dataAttr(loading)} disabled={loading || rest.disabled}>
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
