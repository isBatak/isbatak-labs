import { useState } from "react"
import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Text } from "@isbatak/react-ui/text"
import { Timer } from "@isbatak/react-ui/timer"

export function TimerPomodoroDemo() {
  const [isWorking, setIsWorking] = useState(true)
  const [cycles, setCycles] = useState(0)

  const handleComplete = () => {
    setIsWorking(!isWorking)
    if (!isWorking) setCycles((c) => c + 1)
  }

  return (
    <Timer.Root countdown startMs={isWorking ? 25 * 60 * 1000 : 5 * 60 * 1000} onComplete={handleComplete}>
      <Text textStyle="lg" fontWeight="semibold">
        {isWorking ? "Work session" : "Break session"}
      </Text>
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
          <StartIcon asChild>
            <Icon name="play" />
          </StartIcon>
          Start
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="pause">
          <StartIcon asChild>
            <Icon name="pause" />
          </StartIcon>
          Pause
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="reset">
          <StartIcon asChild>
            <Icon name="undo" />
          </StartIcon>
          Reset
        </Timer.ActionTrigger>
      </Timer.Control>
      <Text textStyle="sm" color="fg.muted">
        Completed cycles: {cycles}
      </Text>
    </Timer.Root>
  )
}
