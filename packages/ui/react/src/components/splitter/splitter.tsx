"use client"

import { ark } from "@ark-ui/react/factory"
import { Splitter } from "@ark-ui/react/splitter"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { splitter } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(splitter)

export const SplitterRoot = withProvider(Splitter.Root, "root")
export type SplitterRootProps = ComponentProps<typeof SplitterRoot>

export const SplitterRootProvider = withProvider(Splitter.RootProvider, "root")
export type SplitterRootProviderProps = ComponentProps<typeof SplitterRootProvider>

export const SplitterPanel = withContext(Splitter.Panel, "panel")
export type SplitterPanelProps = ComponentProps<typeof SplitterPanel>

export const SplitterResizeTriggerSeparator = withContext(ark.div, "resizeTriggerSeparator")
export type SplitterResizeTriggerSeparatorProps = ComponentProps<typeof SplitterResizeTriggerSeparator>

export const SplitterResizeTriggerIndicator = withContext(Splitter.ResizeTriggerIndicator, "resizeTriggerIndicator")
export type SplitterResizeTriggerIndicatorProps = ComponentProps<typeof SplitterResizeTriggerIndicator>

const StyledSplitterResizeTrigger = withContext(Splitter.ResizeTrigger, "resizeTrigger")
export type SplitterResizeTriggerProps = ComponentProps<typeof StyledSplitterResizeTrigger>

export function SplitterResizeTrigger({ children, ...props }: SplitterResizeTriggerProps) {
  return (
    <StyledSplitterResizeTrigger aria-label="Resize" {...props}>
      {children ?? (
        <>
          <SplitterResizeTriggerSeparator />
          <SplitterResizeTriggerIndicator />
        </>
      )}
    </StyledSplitterResizeTrigger>
  )
}

export const SplitterContext = Splitter.Context
export type SplitterContextProps = Splitter.ContextProps
