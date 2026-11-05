<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <IconButton aria-label="Like" size="xs" variant="outline">
    <Icon name="heart" />
  </IconButton>
  <IconButton aria-label="Like" size="sm" variant="outline">
    <Icon name="heart" />
  </IconButton>
  <IconButton aria-label="Like" size="md" variant="outline">
    <Icon name="heart" />
  </IconButton>
  <IconButton aria-label="Like" size="lg" variant="outline">
    <Icon name="heart" />
  </IconButton>
</HStack>
