import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Timer } from "@isbatak/react-ui/timer"

export function TimerDemo() {
  return (
    <Timer.Root targetMs={60 * 60 * 1000} startMs={40 * 60 * 1000}>
      <Timer.Area>
        <Timer.ItemGroup>
          <Timer.Item type="days" />
          <Timer.ItemLabel>days</Timer.ItemLabel>
        </Timer.ItemGroup>
        <Timer.Separator>:</Timer.Separator>
        <Timer.ItemGroup>
          <Timer.Item type="hours" />
          <Timer.ItemLabel>hours</Timer.ItemLabel>
        </Timer.ItemGroup>
        <Timer.Separator>:</Timer.Separator>
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
          Play
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="resume">
          <StartIcon asChild>
            <Icon name="play" />
          </StartIcon>
          Resume
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="pause">
          <StartIcon asChild>
            <Icon name="pause" />
          </StartIcon>
          Pause
        </Timer.ActionTrigger>
      </Timer.Control>
    </Timer.Root>
  )
}
