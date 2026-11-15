import { ark } from "@ark-ui/solid/factory"
import { tone } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { type ComponentProps, createContext, Show, splitProps, useContext } from "solid-js"

import { Icon } from "../icon/icon"
import type { ToneType } from "./detect-tone"

const ToneContext = createContext<() => ToneType>(() => "neutral" as ToneType)

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(tone)

const StyledToneRoot = withProvider(ark.span, "root")
export type ToneRootProps = ComponentProps<typeof StyledToneRoot>

export function ToneRoot(props: ToneRootProps) {
  const value = () => (typeof props.tone === "string" ? props.tone : "neutral") as ToneType
  return (
    <ToneContext.Provider value={value}>
      <StyledToneRoot data-tone={value()} {...props} />
    </ToneContext.Provider>
  )
}

export const TonePropsProvider = PropsProvider

export function useToneContext() {
  return useContext(ToneContext)
}

const StyledToneIndicator = withContext(ark.span, "indicator")
export type ToneIndicatorProps = ComponentProps<typeof StyledToneIndicator>

export function ToneIndicator(props: ToneIndicatorProps) {
  const value = useContext(ToneContext)
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledToneIndicator data-tone={value()} {...rest}>
      <Show
        when={local.children}
        fallback={
          <Show when={value() !== "neutral"} fallback={<svg aria-hidden="true" />}>
            <Icon name={value() === "positive" ? "caret-up-filled" : "caret-down-filled"} />
          </Show>
        }
      >
        {local.children}
      </Show>
    </StyledToneIndicator>
  )
}
