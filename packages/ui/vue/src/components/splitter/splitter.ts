import { ark } from "@ark-ui/vue/factory"
import { Splitter } from "@ark-ui/vue/splitter"
import { type Component, defineComponent, Fragment, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
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

export const SplitterResizeTrigger = defineComponent({
  name: "SplitterResizeTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledSplitterResizeTrigger as Component,
        { "aria-label": "Resize", ...attrs },
        () =>
          slots.default?.() ??
          h(Fragment, [h(SplitterResizeTriggerSeparator as Component), h(SplitterResizeTriggerIndicator as Component)]),
      )
  },
}) as unknown as typeof StyledSplitterResizeTrigger

export const SplitterContext = Splitter.Context
export type SplitterContextProps = Splitter.ContextProps
