<script lang="ts">
  import { AbsoluteCenter } from "@isbatak/svelte-ui/absolute-center"
  import { Box } from "@isbatak/svelte-ui/box"
  import { Spinner } from "@isbatak/svelte-ui/spinner"
</script>

<Box position="relative" h="32" w="full" maxW="sm" borderWidth="1px" borderRadius="l2" p="4" color="fg.muted">
  Loading the report…
  <AbsoluteCenter>
    <Spinner />
  </AbsoluteCenter>
</Box>
