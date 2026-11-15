import { useState } from "react"
import { Icon } from "@isbatak/react-ui/icon"
import { Text } from "@isbatak/react-ui/text"
import { Timer } from "@isbatak/react-ui/timer"

export function TimerEventsDemo() {
  const [ticks, setTicks] = useState(0)
  const [completed, setCompleted] = useState(false)

  return (
    <Timer.Root targetMs={10 * 1000} onTick={() => setTicks((t) => t + 1)} onComplete={() => setCompleted(true)}>
      <Timer.Area>
        <Timer.ItemGroup>
          <Timer.Item type="minutes" />
          <Timer.ItemLabel>minutes</Timer.ItemLabel>
        </Timer.ItemGroup>
        <Timer.Separator>:</Timer.Separator>
        <Timer.ItemGroup>
          <Timer.Item type="seconds" />
          <Timer.ItemLabel>seconds</Timer.ItemLabel>
        </Timer.ItemGroup>
      </Timer.Area>
      <Timer.Control>
        <Timer.ActionTrigger action="start">
          <Icon name="play" />
          Start
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="reset">
          <Icon name="undo" />
          Reset
        </Timer.ActionTrigger>
      </Timer.Control>
      <Text textStyle="sm" color="fg.muted">
        Ticks: {ticks} · {completed ? "Completed" : "Not completed"}
      </Text>
    </Timer.Root>
  )
}
