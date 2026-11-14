import { Progress } from "@ark-ui/vue/progress"
import { progress } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(progress)

export const ProgressRoot = withProvider(Progress.Root, "root")
export type ProgressRootProps = ComponentProps<typeof ProgressRoot>

export const ProgressRootProvider = withProvider(Progress.RootProvider, "root")
export type ProgressRootProviderProps = ComponentProps<typeof ProgressRootProvider>

export const ProgressPropsProvider = PropsProvider

export const ProgressLabel = withContext(Progress.Label, "label")
export type ProgressLabelProps = ComponentProps<typeof ProgressLabel>

export const ProgressTrack = withContext(Progress.Track, "track")
export type ProgressTrackProps = ComponentProps<typeof ProgressTrack>

export const ProgressRange = withContext(Progress.Range, "range")
export type ProgressRangeProps = ComponentProps<typeof ProgressRange>

export const ProgressValueText = withContext(Progress.ValueText, "valueText")
export type ProgressValueTextProps = ComponentProps<typeof ProgressValueText>

export const ProgressContext = Progress.Context
export type ProgressContextProps = Progress.ContextProps
