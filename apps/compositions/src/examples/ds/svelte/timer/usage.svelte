<script lang="ts">
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { Timer } from "@isbatak/svelte-ui/timer"
</script>

<Timer.Root targetMs={60 * 60 * 1000} startMs={40 * 60 * 1000}>
  <Timer.Area>
    <Timer.ItemGroup>
      <Timer.Item type="days" />
      <Timer.ItemLabel>days</Timer.ItemLabel>
    </Timer.ItemGroup>
    <Timer.Separator>:</Timer.Separator>
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
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="play" />{/snippet}
      </StartIcon>
      Play
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="resume">
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="play" />{/snippet}
      </StartIcon>
      Resume
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="pause">
      <StartIcon>
        {#snippet asChild(iconProps)}<Icon {...iconProps()} name="pause" />{/snippet}
      </StartIcon>
      Pause
    </Timer.ActionTrigger>
  </Timer.Control>
</Timer.Root>
