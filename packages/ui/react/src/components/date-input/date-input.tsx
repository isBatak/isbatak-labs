"use client"

import { DateInput } from "@ark-ui/react/date-input"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
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

export function DateInputSegments(props: DateInputSegmentsProps) {
  return (
    <DateInput.SegmentContext>
      {(segment) => <DateInputSegment segment={segment} {...props} />}
    </DateInput.SegmentContext>
  )
}

export const DateInputHiddenInput = DateInput.HiddenInput
export type DateInputHiddenInputProps = ComponentProps<typeof DateInputHiddenInput>

export const DateInputContext = DateInput.Context
export type DateInputContextProps = DateInput.ContextProps

export const DateInputSegmentContext = DateInput.SegmentContext
export type DateInputSegmentContextProps = DateInput.SegmentContextProps
