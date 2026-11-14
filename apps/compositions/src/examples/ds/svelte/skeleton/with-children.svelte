<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Skeleton } from "@isbatak/svelte-ui/skeleton"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Skeleton loading={true}>
    <Badge>Select</Badge>
  </Skeleton>
  <Skeleton loading={false}>
    <Badge>Select</Badge>
  </Skeleton>
</HStack>
