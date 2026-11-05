"use client"

import { AbsoluteCenter, styled } from "@isbatak/panda-ds/jsx"
import type { ComponentProps, ReactNode } from "react"

import { Spinner } from "../spinner"

const Contents = styled("span", { base: { display: "contents" } })

const HiddenContents = styled("span", { base: { display: "contents", visibility: "hidden" } })

const SpinnerSlot = styled("span", { base: { display: "inline-flex" } })

export interface LoaderProps extends ComponentProps<typeof Contents> {
  visible?: boolean | undefined
  spinner?: ReactNode | undefined
  spinnerPlacement?: "start" | "end" | undefined
  text?: ReactNode | undefined
}

export function Loader(props: LoaderProps) {
  const {
    spinner = <Spinner size="inherit" borderWidth="0.125em" color="inherit" />,
    spinnerPlacement = "start",
    children,
    text,
    visible = true,
    ...rest
  } = props

  if (!visible) return children

  if (text) {
    return (
      <Contents {...rest}>
        {spinnerPlacement === "start" && (
          <SpinnerSlot data-icon-start="" aria-hidden>
            {spinner}
          </SpinnerSlot>
        )}
        {text}
        {spinnerPlacement === "end" && (
          <SpinnerSlot data-icon-end="" aria-hidden>
            {spinner}
          </SpinnerSlot>
        )}
      </Contents>
    )
  }

  if (spinner) {
    return (
      <Contents {...rest}>
        <AbsoluteCenter as="span" display="inline-flex">
          {spinner}
        </AbsoluteCenter>
        <HiddenContents>{children}</HiddenContents>
      </Contents>
    )
  }

  return <Contents {...rest}>{children}</Contents>
}
