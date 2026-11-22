import { Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { Timer } from "@isbatak/solid-ui/timer"

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
          <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="play" />} />
          Start
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="pause">
          <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="pause" />} />
          Pause
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="reset">
          <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="undo" />} />
          Reset
        </Timer.ActionTrigger>
      </Timer.Control>
    </Timer.Root>
  )
}
