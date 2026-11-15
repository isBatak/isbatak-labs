import { Icon } from "@isbatak/solid-ui/icon"
import { Stack } from "@isbatak/solid-ui/stack"
import { Timer } from "@isbatak/solid-ui/timer"

export function TimerSizesDemo() {
  return (
    <Stack gap="8" align="flex-start">
      <Timer.Root size="sm" startMs={25 * 60 * 1000}>
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
      <Timer.Root size="md" startMs={25 * 60 * 1000}>
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
      <Timer.Root size="lg" startMs={25 * 60 * 1000}>
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
    </Stack>
  )
}
