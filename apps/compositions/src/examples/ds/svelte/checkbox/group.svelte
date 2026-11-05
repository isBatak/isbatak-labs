<script lang="ts">
  import { Checkbox } from "@isbatak/svelte-ui/checkbox"
</script>

<Checkbox.Group defaultValue={["react"]} name="framework">
  <Checkbox.Root value="react">
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>React</Checkbox.Label>
  </Checkbox.Root>
  <Checkbox.Root value="vue">
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>Vue</Checkbox.Label>
  </Checkbox.Root>
  <Checkbox.Root value="svelte">
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>Svelte</Checkbox.Label>
  </Checkbox.Root>
</Checkbox.Group>
