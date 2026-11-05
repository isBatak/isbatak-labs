<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Button loading>Click me</Button>
  <Button loading loadingText="Saving…">
    Click me
  </Button>
</HStack>
