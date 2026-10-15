<script lang="ts">
  import { hourItems, meridiemItems, minuteItems } from "@isbatak/storybook-shared"
  import Picker from "./picker.svelte"

  let hour = $state("9")
  let minute = $state("41")
  let meridiem = $state("AM")
</script>

<main class="wheel-picker">
  <div class="wheel-picker-group" role="group" aria-label="Time">
    <Picker label="Hour" name="hour" items={hourItems} bind:value={hour} loop />
    <Picker label="Minute" name="minute" items={minuteItems} bind:value={minute} loop />
    <Picker label="Meridiem" name="meridiem" items={meridiemItems} bind:value={meridiem} />
  </div>
  <output data-testid="value">Selected time: {hour}:{minute} {meridiem}</output>
</main>
