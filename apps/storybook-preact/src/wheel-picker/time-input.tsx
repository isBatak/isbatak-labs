import {
  getDayPeriodItems,
  getHourCycle,
  getHourItems,
  getMinuteItems,
  getTimeFormatter,
  getTimeParts,
  isDayPeriod,
  isTwelveHourCycle,
  setTimePart,
  type TimeInputControls,
  type TimeParts,
} from "@isbatak/storybook-shared"
import * as dateInput from "@zag-js/date-input"
import * as popover from "@zag-js/popover"
import { normalizeProps, useMachine } from "@zag-js/preact"
import { useId, useMemo, useState } from "preact/hooks"
import { Picker } from "./picker"

export function TimeInput({ locale }: TimeInputControls) {
  const id = useId()
  const [value, setValue] = useState<dateInput.DateValue[]>([])
  const formatter = useMemo(() => getTimeFormatter(locale), [locale])
  const dateInputService = useMachine(dateInput.machine, {
    id: `${id}:input`,
    locale,
    granularity: "minute",
    formatter,
    shouldForceLeadingZeros: true,
    name: "time",
    value,
    onValueChange(details) {
      setValue(details.value)
    },
  })
  const dateInputApi = dateInput.connect(dateInputService, normalizeProps)
  const hourCycle = useMemo(() => getHourCycle(locale), [locale])
  const hourItems = useMemo(() => getHourItems(locale, hourCycle), [locale, hourCycle])
  const minuteItems = useMemo(() => getMinuteItems(locale), [locale])
  const dayPeriodItems = useMemo(() => getDayPeriodItems(locale), [locale])
  const time = getTimeParts(dateInputApi.value[0] ?? dateInputApi.placeholderValue, hourCycle)

  const updateTime = <Part extends keyof TimeParts>(part: Part, partValue: TimeParts[Part]) => {
    setValue((currentValue) => {
      const nextTime = setTimePart(currentValue[0] ?? dateInputApi.placeholderValue, hourCycle, part, partValue)
      return nextTime ? [nextTime] : currentValue
    })
  }

  const popoverService = useMachine(popover.machine, {
    id: `${id}:popover`,
    positioning: { placement: "bottom" },
    modal: true,
  })
  const popoverApi = popover.connect(popoverService, normalizeProps)

  return (
    <main className="date-input wheel-picker wheel-picker-time-input">
      <div {...dateInputApi.getRootProps()}>
        <label {...dateInputApi.getLabelProps()}>Time</label>
        <div {...popoverApi.getAnchorProps()} className="wheel-picker-time-field">
          <div {...dateInputApi.getControlProps()}>
            <div {...dateInputApi.getSegmentGroupProps()}>
              {dateInputApi.getSegments().map((segment, index) => (
                <span key={index} {...dateInputApi.getSegmentProps({ segment })}>
                  {segment.text}
                </span>
              ))}
            </div>
          </div>
          <button {...popoverApi.getTriggerProps()} aria-label="Open time picker">
            🕘
          </button>
        </div>
        <input {...dateInputApi.getHiddenInputProps()} />
      </div>

      <div {...popoverApi.getPositionerProps()}>
        <div className="wheel-picker-time-content" {...popoverApi.getContentProps()}>
          <div className="sr-only" {...popoverApi.getTitleProps()}>
            Select time
          </div>
          <div className="sr-only" {...popoverApi.getDescriptionProps()}>
            Choose an hour, minute, and day period.
          </div>

          <div className="wheel-picker-group" role="group" aria-label="Time picker">
            <Picker
              label="Hour"
              items={hourItems}
              value={time.hour}
              loop
              onValueChange={(details) => updateTime("hour", details.value)}
            />
            <Picker
              label="Minute"
              items={minuteItems}
              value={time.minute}
              loop
              onValueChange={(details) => updateTime("minute", details.value)}
            />
            {isTwelveHourCycle(hourCycle) && (
              <Picker
                label="Day period"
                items={dayPeriodItems}
                value={time.dayPeriod}
                onValueChange={(details) => isDayPeriod(details.value) && updateTime("dayPeriod", details.value)}
              />
            )}
          </div>
        </div>
      </div>

      <output data-testid="value">Selected time: {dateInputApi.valueAsString[0] ?? "-"}</output>
    </main>
  )
}
