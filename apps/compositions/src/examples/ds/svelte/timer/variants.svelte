<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Timer } from "@isbatak/svelte-ui/timer"
</script>

<Stack gap="6" align="flex-start">
  <Timer.Root variant="plain" startMs={25 * 60 * 1000}>
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
  </Timer.Root>
  <Timer.Root variant="outline" startMs={25 * 60 * 1000}>
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
  </Timer.Root>
  <Timer.Root variant="subtle" startMs={25 * 60 * 1000}>
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
  </Timer.Root>
</Stack>
