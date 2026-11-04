<script lang="ts">
  import { AspectRatio } from "@isbatak/svelte-ui/aspect-ratio"
  import { Center } from "@isbatak/svelte-ui/center"
</script>

<AspectRatio ratio={{ base: 1, md: 16 / 9 }} w="full" maxW="sm">
  <Center bg="bg.emphasized" borderRadius="l2">1 / 1, then 16 / 9 from md</Center>
</AspectRatio>
