<script lang="ts">
  import { DateInput, parseDate } from "@isbatak/svelte-ui/date-input"
  import { css } from "styled-system/css"
</script>

<DateInput.Root disabled defaultValue={[parseDate("2026-11-08")]} class={css({ maxW: "xs" })}>
  <DateInput.Label>Date</DateInput.Label>
  <DateInput.Control>
    <DateInput.SegmentGroup>
      <DateInput.Segments />
    </DateInput.SegmentGroup>
  </DateInput.Control>
  <DateInput.HiddenInput />
</DateInput.Root>
