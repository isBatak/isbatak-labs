import { Heading } from "@isbatak/solid-ui/heading"
import { Stack } from "@isbatak/solid-ui/stack"

export function HeadingWeightsDemo() {
  return (
    <Stack>
      <Heading fontWeight="normal">Normal</Heading>
      <Heading fontWeight="medium">Medium</Heading>
      <Heading fontWeight="semibold">Semibold</Heading>
      <Heading fontWeight="bold">Bold</Heading>
    </Stack>
  )
}
