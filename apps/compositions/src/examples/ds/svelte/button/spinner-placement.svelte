<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Button loading loadingText="Loading" spinnerPlacement="start">
    Submit
  </Button>
  <Button loading loadingText="Loading" spinnerPlacement="end">
    Continue
  </Button>
</HStack>
