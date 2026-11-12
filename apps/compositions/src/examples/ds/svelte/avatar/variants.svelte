<script lang="ts">
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="3">
  <Avatar.Root variant="solid">
    <Avatar.Fallback name="Segun Adebayo" />
  </Avatar.Root>
  <Avatar.Root variant="outline">
    <Avatar.Fallback name="Segun Adebayo" />
  </Avatar.Root>
  <Avatar.Root variant="subtle">
    <Avatar.Fallback name="Segun Adebayo" />
  </Avatar.Root>
</HStack>
