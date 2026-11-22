<script lang="ts">
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { Timer } from "@isbatak/svelte-ui/timer"
</script>

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
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="play" />{/snippet}
      </StartIcon>
      Start
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="pause">
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="pause" />{/snippet}
      </StartIcon>
      Pause
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="reset">
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="undo" />{/snippet}
      </StartIcon>
      Reset
    </Timer.ActionTrigger>
  </Timer.Control>
</Timer.Root>
