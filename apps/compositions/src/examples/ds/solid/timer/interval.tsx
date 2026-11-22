import { Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { Timer } from "@isbatak/solid-ui/timer"

export function TimerIntervalDemo() {
  return (
    <Timer.Root interval={100} targetMs={60 * 1000}>
      <Timer.Area>
        <Timer.ItemGroup>
          <Timer.Item type="seconds" />
          <Timer.ItemLabel>seconds</Timer.ItemLabel>
        </Timer.ItemGroup>
        <Timer.Separator>.</Timer.Separator>
        <Timer.ItemGroup>
          <Timer.Item type="milliseconds" />
          <Timer.ItemLabel>ms</Timer.ItemLabel>
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
