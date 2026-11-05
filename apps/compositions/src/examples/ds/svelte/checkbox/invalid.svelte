<script lang="ts">
  import { Checkbox } from "@isbatak/svelte-ui/checkbox"
</script>

<Checkbox.Root invalid>
  <Checkbox.HiddenInput />
  <Checkbox.Control />
  <Checkbox.Label>I agree to the terms</Checkbox.Label>
</Checkbox.Root>
