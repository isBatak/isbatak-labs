import { ark } from "@ark-ui/solid/factory"
import { Splitter } from "@ark-ui/solid/splitter"
import { type ComponentProps, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export function SplitterResizeTrigger(props: SplitterResizeTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledSplitterResizeTrigger aria-label="Resize" {...rest}>
      {local.children ?? (
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
