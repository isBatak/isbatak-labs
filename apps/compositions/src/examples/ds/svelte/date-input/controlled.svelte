<script lang="ts">
  import { DateInput, parseDate } from "@isbatak/svelte-ui/date-input"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let value = $state([parseDate("2026-11-08")])
</script>

<Stack gap="3" maxW="xs">
  <DateInput.Root bind:value>
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup>
        <DateInput.Segments />
      </DateInput.SegmentGroup>
    </DateInput.Control>
    <DateInput.HiddenInput />
  </DateInput.Root>
  <Text textStyle="sm" color="fg.muted">Value: {value[0]?.toString() ?? "none"}</Text>
</Stack>
