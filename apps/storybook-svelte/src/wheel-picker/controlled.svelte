<script lang="ts">
  import { controlledItems } from "@isbatak/storybook-shared"
  import Picker from "./picker.svelte"

  let value = $state("react")
</script>

<main class="wheel-picker">
  <Picker label="Framework" items={controlledItems} bind:value />
  <div class="wheel-picker-actions">
    <button type="button" onclick={() => (value = "react")}>Select React</button>
    <button type="button" onclick={() => (value = "svelte")}>Select Svelte</button>
  </div>
  <output data-testid="value">Controlled value: {value}</output>
</main>
