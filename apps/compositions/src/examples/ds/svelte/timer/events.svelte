<script lang="ts">
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
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
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="play" />{/snippet}
      </StartIcon>
      Start
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="reset">
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="undo" />{/snippet}
      </StartIcon>
      Reset
    </Timer.ActionTrigger>
  </Timer.Control>
  <Text textStyle="sm" color="fg.muted">
    Ticks: {ticks} · {completed ? "Completed" : "Not completed"}
  </Text>
</Timer.Root>
