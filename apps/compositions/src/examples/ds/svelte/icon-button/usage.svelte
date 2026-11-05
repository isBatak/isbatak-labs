<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <IconButton aria-label="Search" variant="solid">
    <Icon name="search" />
  </IconButton>
  <IconButton aria-label="Search" variant="outline">
    <Icon name="search" />
  </IconButton>
  <IconButton aria-label="Search" variant="ghost">
    <Icon name="search" />
  </IconButton>
</HStack>
