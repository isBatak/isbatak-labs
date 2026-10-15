"use client"

import { useState } from "react"
import { css } from "styled-system/css"

import { formatTime, type Time, TimeWheels } from "./time-wheels"

export function TimeWheelsDemo() {
  const [time, setTime] = useState<Time>({ hour: 21, minute: 41 })

  return (
    <div className={css({ display: "grid", gap: "4", justifyItems: "center" })}>
      <div className={css({ width: "56" })}>
        <TimeWheels value={time} onValueChange={setTime} />
      </div>
      <output className={css({ color: "fg.muted", textStyle: "sm" })}>Selected: {formatTime(time)}</output>
    </div>
  )
}
