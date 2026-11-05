<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Button disabled>Native disabled</Button>
  <Button disabled accessibleWhenDisabled>
    Still focusable
  </Button>
</HStack>
