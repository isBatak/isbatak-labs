"use client"

import { DateInput } from "@ark-ui/react/date-input"
import { Portal } from "@ark-ui/react/portal"
import { type DateValue, DateFormatter } from "@internationalized/date"
import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"
import { useMemo, useState } from "react"
import { css } from "styled-system/css"

import { type Time, TimeWheels } from "./time-wheels"

const segmentStyles = css({
  px: "0.5",
  borderRadius: "l1",
  fontVariantNumeric: "tabular-nums",
  outline: "none",
  _focus: { bg: "colorPalette.solid", color: "colorPalette.contrast" },
  "&[data-placeholder]": { color: "fg.muted" },
})

const controlStyles = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "2",
  h: "10",
  ps: "3",
  pe: "1",
  borderWidth: "1px",
  borderRadius: "l2",
  textStyle: "sm",
  _focusWithin: { borderColor: "colorPalette.solid" },
})

const toTime = (value: DateValue | undefined): Time => ({
  hour: value && "hour" in value ? value.hour : 0,
  minute: value && "minute" in value ? value.minute : 0,
})

export function TimeInput({ locale = "en-US" }: { locale?: string }) {
  const [value, setValue] = useState<DateValue[]>([])
  const formatter = useMemo(
    () => new DateFormatter(locale, { hour: "2-digit", minute: "2-digit", timeZone: "UTC" }),
    [locale],
  )

  return (
    <DateInput.Root
      locale={locale}
      granularity="minute"
      formatter={formatter}
      shouldForceLeadingZeros
      value={value}
      onValueChange={(details) => setValue(details.value)}
    >
      <Popover.Root positioning={{ placement: "bottom-end" }} modal>
        <DateInput.Context>
          {(dateInput) => (
            <>
              <DateInput.Label className={css({ display: "block", mb: "2", textStyle: "sm", fontWeight: "medium" })}>
                Time
              </DateInput.Label>
              <Popover.Anchor className={controlStyles}>
                <DateInput.Control>
                  <DateInput.SegmentGroup className={css({ display: "flex" })}>
                    {dateInput.getSegments().map((segment, index) => (
                      <DateInput.Segment key={index} segment={segment} className={segmentStyles}>
                        {segment.text}
                      </DateInput.Segment>
                    ))}
                  </DateInput.SegmentGroup>
                </DateInput.Control>
                <Popover.Trigger asChild>
                  <Button variant="ghost" size="sm" aria-label="Open time picker">
                    🕘
                  </Button>
                </Popover.Trigger>
              </Popover.Anchor>
              <Portal>
                <Popover.Positioner>
                  <Popover.Content w="64">
                    <Popover.Title srOnly>Select time</Popover.Title>
                    <TimeWheels
                      locale={locale}
                      value={toTime(value[0] ?? dateInput.placeholderValue)}
                      onValueChange={(time) => {
                        const current = value[0] ?? dateInput.placeholderValue
                        if ("hour" in current) setValue([current.set(time)])
                      }}
                    />
                  </Popover.Content>
                </Popover.Positioner>
              </Portal>
            </>
          )}
        </DateInput.Context>
        <DateInput.HiddenInput />
      </Popover.Root>
    </DateInput.Root>
  )
}
