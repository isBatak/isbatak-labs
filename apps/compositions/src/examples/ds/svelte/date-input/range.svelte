<script lang="ts">
  import { DateInput } from "@isbatak/svelte-ui/date-input"
  import { css } from "styled-system/css"
</script>

<DateInput.Root selectionMode="range" class={css({ maxW: "sm" })}>
  <DateInput.Label>Trip dates</DateInput.Label>
  <DateInput.Control>
    <DateInput.SegmentGroup index={0}>
      <DateInput.Segments />
    </DateInput.SegmentGroup>
    <span class={css({ color: "fg.muted", px: "2" })}>–</span>
    <DateInput.SegmentGroup index={1}>
      <DateInput.Segments />
    </DateInput.SegmentGroup>
  </DateInput.Control>
  <DateInput.HiddenInput />
</DateInput.Root>
