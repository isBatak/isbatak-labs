<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Text } from "@isbatak/svelte-ui/text"
  import { Timer } from "@isbatak/svelte-ui/timer"

  let ticks = $state(0)
  let completed = $state(false)
</script>

<Timer.Root targetMs={10 * 1000} onTick={() => ticks++} onComplete={() => (completed = true)}>
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
