import { Icon } from "@isbatak/react-ui/icon"
import { Timer } from "@isbatak/react-ui/timer"

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
          <Icon name="play" />
          Start
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="pause">
          <Icon name="pause" />
          Pause
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="reset">
          <Icon name="undo" />
          Reset
        </Timer.ActionTrigger>
      </Timer.Control>
    </Timer.Root>
  )
}
