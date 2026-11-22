<script lang="ts">
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Timer } from "@isbatak/svelte-ui/timer"
</script>

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
</Stack>
