<script lang="ts">
  import { Skeleton, SkeletonCircle } from "@isbatak/svelte-ui/skeleton"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="5">
  <SkeletonCircle size="12" />
  <Stack flex="1">
    <Skeleton height="5" />
    <Skeleton height="5" width="[80%]" />
  </Stack>
</HStack>
