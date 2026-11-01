<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
</script>

<Box display="grid" gap="4" justifyItems="start">
  <Box p="4" bg="bg.muted" borderRadius="l2" color="fg">Style props</Box>
  <Box as="button" type="button" px="4" py="2" borderWidth="1px" borderRadius="l2" _hover={{ bg: "bg.subtle" }}>
    A button with a hover style
  </Box>
  <Box css={{ p: "3", color: "fg.error", textStyle: "sm" }}>The css prop</Box>
  <Box w={{ base: "full", md: "1/2" }} h="2" bg="colorPalette.solid" borderRadius="full" />
</Box>
