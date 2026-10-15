import { hourItems, meridiemItems, minuteItems } from "@isbatak/storybook-shared"
import { useState } from "preact/hooks"
import { Picker } from "./picker"

export function Multiple() {
  const [hour, setHour] = useState("9")
  const [minute, setMinute] = useState("41")
  const [meridiem, setMeridiem] = useState("AM")

  return (
    <main className="wheel-picker">
      <div className="wheel-picker-group" role="group" aria-label="Time">
        <Picker label="Hour" name="hour" items={hourItems} value={hour} loop onValueChange={(d) => setHour(d.value)} />
        <Picker
          label="Minute"
          name="minute"
          items={minuteItems}
          value={minute}
          loop
          onValueChange={(d) => setMinute(d.value)}
        />
        <Picker
          label="Meridiem"
          name="meridiem"
          items={meridiemItems}
          value={meridiem}
          onValueChange={(d) => setMeridiem(d.value)}
        />
      </div>

      <output data-testid="value">
        Selected time: {hour}:{minute} {meridiem}
      </output>
    </main>
  )
}
