"use client"

import { ark } from "@ark-ui/react/factory"
import { createContext, useContext, type ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { tone } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"
import type { ToneType } from "./detect-tone"

const ToneContext = createContext<ToneType>("neutral")

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(tone)

const StyledToneRoot = withProvider(ark.span, "root")
export type ToneRootProps = ComponentProps<typeof StyledToneRoot>

export function ToneRoot(props: ToneRootProps) {
  const value = (typeof props.tone === "string" ? props.tone : "neutral") as ToneType
  return (
    <ToneContext.Provider value={value}>
      <StyledToneRoot data-tone={value} {...props} />
    </ToneContext.Provider>
  )
}

export const TonePropsProvider = PropsProvider

export function useToneContext() {
  return useContext(ToneContext)
}

const StyledToneIndicator = withContext(ark.span, "indicator")
export type ToneIndicatorProps = ComponentProps<typeof StyledToneIndicator>

export function ToneIndicator({ children, ...props }: ToneIndicatorProps) {
  const value = useContext(ToneContext)
  return (
    <StyledToneIndicator data-tone={value} {...props}>
      {children ??
        (value === "neutral" ? (
          <svg aria-hidden="true" />
        ) : (
          <Icon name={value === "positive" ? "caret-up-filled" : "caret-down-filled"} />
        ))}
    </StyledToneIndicator>
  )
}
