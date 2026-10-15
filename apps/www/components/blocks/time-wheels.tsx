"use client"

import { useMemo } from "react"
import { css } from "styled-system/css"

import { WheelColumn } from "./wheel-column"

export interface Time {
  hour: number
  minute: number
}

export interface TimeWheelsProps {
  value: Time
  onValueChange: (value: Time) => void
  locale?: string
}

const pad = (value: number) => String(value).padStart(2, "0")

const getTwelveHour = (locale: string) =>
  new Intl.DateTimeFormat(locale, { hour: "numeric" }).resolvedOptions().hourCycle?.startsWith("h1") ?? false

const getDayPeriods = (locale: string) => {
  const format = new Intl.DateTimeFormat(locale, { hour: "numeric", hourCycle: "h12" })
  return [9, 21].map(
    (hour) =>
      format.formatToParts(new Date(2020, 0, 1, hour)).find((part) => part.type === "dayPeriod")?.value ??
      (hour < 12 ? "AM" : "PM"),
  )
}

const toItems = (length: number, offset: number) =>
  Array.from({ length }, (_, index) => ({ value: String(index + offset), label: pad(index + offset) }))

export function TimeWheels({ value, onValueChange, locale = "en-US" }: TimeWheelsProps) {
  const twelveHour = getTwelveHour(locale)
  const hours = useMemo(() => (twelveHour ? toItems(12, 1) : toItems(24, 0)), [twelveHour])
  const minutes = useMemo(() => toItems(60, 0), [])
  const periods = useMemo(() => {
    const [am, pm] = getDayPeriods(locale)
    return [
      { value: "am", label: am! },
      { value: "pm", label: pm! },
    ]
  }, [locale])

  const period = value.hour >= 12 ? "pm" : "am"
  const displayHour = twelveHour ? value.hour % 12 || 12 : value.hour

  const setHour = (hour: number, nextPeriod = period) =>
    onValueChange({ ...value, hour: twelveHour ? (hour % 12) + (nextPeriod === "pm" ? 12 : 0) : hour })

  return (
    <div role="group" aria-label="Time" className={css({ display: "flex", gap: "1", width: "full" })}>
      <WheelColumn
        label="Hour"
        items={hours}
        value={String(displayHour)}
        loop
        onValueChange={(hour) => setHour(Number(hour))}
      />
      <WheelColumn
        label="Minute"
        items={minutes}
        value={String(value.minute)}
        loop
        onValueChange={(minute) => onValueChange({ ...value, minute: Number(minute) })}
      />
      {twelveHour && (
        <WheelColumn
          label="AM/PM"
          items={periods}
          value={period}
          onValueChange={(next) => setHour(displayHour, next)}
        />
      )}
    </div>
  )
}

export function formatTime({ hour, minute }: Time, locale = "en-US") {
  return new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit" }).format(
    new Date(2020, 0, 1, hour, minute),
  )
}
