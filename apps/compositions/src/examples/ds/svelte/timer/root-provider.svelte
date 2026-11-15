<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { Timer, useTimer } from "@isbatak/svelte-ui/timer"

  const id = $props.id()
  const timer = useTimer({ id, targetMs: 60 * 60 * 1000 })
</script>

<Stack gap="3" align="flex-start">
  <Text textStyle="sm" color="fg.muted">
    Running: {timer().running ? "yes" : "no"}
  </Text>
  <Timer.RootProvider value={timer}>
    <Timer.Area>
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
        <Icon name="play" />
        Start
      </Timer.ActionTrigger>
      <Timer.ActionTrigger action="resume">
        <Icon name="play" />
        Resume
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
  </Timer.RootProvider>
</Stack>
