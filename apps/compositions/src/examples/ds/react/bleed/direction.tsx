import { Bleed } from "@isbatak/react-ui/bleed"
import { Box } from "@isbatak/react-ui/box"
import { Stack } from "@isbatak/react-ui/stack"

export function BleedDirectionDemo() {
  return (
    <Box w="full" maxW="sm" p="8" borderWidth="1px" borderRadius="l2">
      <Stack gap="4">
        <Bleed inlineStart="8" bg="bg.emphasized" p="2">
          inlineStart
        </Bleed>
        <Bleed inlineEnd="8" bg="bg.emphasized" p="2">
          inlineEnd
        </Bleed>
      </Stack>
    </Box>
  )
}
