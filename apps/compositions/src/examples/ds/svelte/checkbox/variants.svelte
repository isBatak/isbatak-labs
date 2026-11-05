<script lang="ts">
  import { Checkbox } from "@isbatak/svelte-ui/checkbox"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="6">
  <Checkbox.Root variant="outline" defaultChecked>
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>Outline</Checkbox.Label>
  </Checkbox.Root>
  <Checkbox.Root variant="subtle" defaultChecked>
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>Subtle</Checkbox.Label>
  </Checkbox.Root>
  <Checkbox.Root variant="solid" defaultChecked>
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>Solid</Checkbox.Label>
  </Checkbox.Root>
</HStack>
