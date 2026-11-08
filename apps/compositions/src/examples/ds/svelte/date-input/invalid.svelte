<script lang="ts">
  import { DateInput } from "@isbatak/svelte-ui/date-input"
  import { field } from "@isbatak/panda-ds/recipes"
  import { css } from "styled-system/css"

  const fieldClasses = field()
</script>

<DateInput.Root invalid class={css({ maxW: "xs" })}>
  <DateInput.Label>Date</DateInput.Label>
  <DateInput.Control>
    <DateInput.SegmentGroup>
      <DateInput.Segments />
    </DateInput.SegmentGroup>
  </DateInput.Control>
  <DateInput.HiddenInput />
  <span class={fieldClasses.errorText}>Enter a date in the future.</span>
</DateInput.Root>
