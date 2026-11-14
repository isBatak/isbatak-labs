<script lang="ts">
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="3">
  <Avatar.Root variant="solid">
    <Avatar.Fallback name="Jane Doe" />
  </Avatar.Root>
  <Avatar.Root variant="outline">
    <Avatar.Fallback name="Jane Doe" />
  </Avatar.Root>
  <Avatar.Root variant="subtle">
    <Avatar.Fallback name="Jane Doe" />
  </Avatar.Root>
</HStack>
