<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack flexWrap="wrap" gap="4">
  <Button variant="solid">Solid</Button>
  <Button variant="subtle">Subtle</Button>
  <Button variant="surface">Surface</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="plain">Plain</Button>
</HStack>
