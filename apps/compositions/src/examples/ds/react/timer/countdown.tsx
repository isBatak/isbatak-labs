import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Timer } from "@isbatak/react-ui/timer"

export function TimerCountdownDemo() {
  return (
    <Timer.Root countdown startMs={5 * 60 * 1000}>
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
    </Timer.Root>
  )
}
