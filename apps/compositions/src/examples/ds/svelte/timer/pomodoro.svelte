<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Text } from "@isbatak/svelte-ui/text"
  import { Timer } from "@isbatak/svelte-ui/timer"

  let isWorking = $state(true)
  let cycles = $state(0)

  const handleComplete = () => {
    isWorking = !isWorking
    if (isWorking) cycles++
  }
</script>

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
  <Text textStyle="sm" color="fg.muted">
    Completed cycles: {cycles}
  </Text>
</Timer.Root>
