import { DateInput } from "@ark-ui/vue/date-input"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { dateInput } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(dateInput)

export const DateInputRoot = withProvider(DateInput.Root, "root")
export type DateInputRootProps = ComponentProps<typeof DateInputRoot>

export const DateInputRootProvider = withProvider(DateInput.RootProvider, "root")
export type DateInputRootProviderProps = ComponentProps<typeof DateInputRootProvider>

export const DateInputLabel = withContext(DateInput.Label, "label")
export type DateInputLabelProps = ComponentProps<typeof DateInputLabel>

export const DateInputControl = withContext(DateInput.Control, "control")
export type DateInputControlProps = ComponentProps<typeof DateInputControl>

export const DateInputSegmentGroup = withContext(DateInput.SegmentGroup, "segmentGroup")
export type DateInputSegmentGroupProps = ComponentProps<typeof DateInputSegmentGroup>

export const DateInputSegment = withContext(DateInput.Segment, "segment")
export type DateInputSegmentProps = ComponentProps<typeof DateInputSegment>

export type DateInputSegmentsProps = Omit<DateInputSegmentProps, "segment">

export const DateInputSegments = defineComponent({
  name: "DateInputSegments",
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () =>
      h(DateInput.SegmentContext as Component, null, {
        default: (segment: unknown) => h(DateInputSegment as Component, { segment, ...attrs }),
      })
  },
}) as unknown as Component<DateInputSegmentsProps>

export const DateInputHiddenInput = DateInput.HiddenInput
export type DateInputHiddenInputProps = ComponentProps<typeof DateInputHiddenInput>

export const DateInputContext = DateInput.Context
export type DateInputContextProps = ComponentProps<typeof DateInputContext>

export const DateInputSegmentContext = DateInput.SegmentContext
export type DateInputSegmentContextProps = ComponentProps<typeof DateInputSegmentContext>
