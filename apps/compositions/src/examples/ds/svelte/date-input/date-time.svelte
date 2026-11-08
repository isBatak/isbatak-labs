<script lang="ts">
  import { DateInput } from "@isbatak/svelte-ui/date-input"
  import { css } from "styled-system/css"
</script>

<DateInput.Root granularity="minute" class={css({ maxW: "xs" })}>
  <DateInput.Label>Meeting</DateInput.Label>
  <DateInput.Control>
    <DateInput.SegmentGroup>
      <DateInput.Segments />
    </DateInput.SegmentGroup>
  </DateInput.Control>
  <DateInput.HiddenInput />
</DateInput.Root>
