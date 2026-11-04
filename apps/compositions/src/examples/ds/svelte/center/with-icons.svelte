<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Center } from "@isbatak/svelte-ui/center"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<Box display="flex" gap="4">
  <Center w="10" h="10" bg="bg.emphasized" borderRadius="l2">
    <Icon name="phone" />
  </Center>
  <Center w="10" h="10" bg="bg.emphasized" borderRadius="l2">
    <Icon name="mail" />
  </Center>
</Box>
