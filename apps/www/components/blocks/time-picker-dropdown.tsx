"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"
import { useState } from "react"

import { formatTime, type Time, TimeWheels } from "./time-wheels"

export function TimePickerDropdown() {
  const [time, setTime] = useState<Time>({ hour: 9, minute: 30 })

  return (
    <Popover.Root positioning={{ placement: "bottom" }}>
      <Popover.Trigger asChild>
        <Button variant="outline" minW="40" justifyContent="space-between">
          {formatTime(time)}
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content w="64">
            <Popover.Title srOnly>Select time</Popover.Title>
            <TimeWheels value={time} onValueChange={setTime} />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
