import { Box } from "@isbatak/solid-ui/box"
import { Loader } from "@isbatak/solid-ui/loader"
import { HStack } from "@isbatak/solid-ui/stack"

export function LoaderDemo() {
  return (
    <HStack gap="6">
      <Box position="relative" display="inline-flex">
        <Loader>Hidden while loading</Loader>
      </Box>
      <HStack gap="2">
        <Loader text="Loading…" />
      </HStack>
    </HStack>
  )
}
