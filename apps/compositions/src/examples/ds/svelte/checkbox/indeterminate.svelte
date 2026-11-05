<script lang="ts">
  import { Checkbox } from "@isbatak/svelte-ui/checkbox"
</script>

<Checkbox.Root defaultChecked="indeterminate">
  <Checkbox.HiddenInput />
  <Checkbox.Control />
  <Checkbox.Label>Select all</Checkbox.Label>
</Checkbox.Root>
