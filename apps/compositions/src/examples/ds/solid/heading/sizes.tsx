import { Heading } from "@isbatak/solid-ui/heading"
import { Stack } from "@isbatak/solid-ui/stack"

export function HeadingSizesDemo() {
  return (
    <Stack gap="2">
      <Heading size="sm">Heading (sm)</Heading>
      <Heading size="md">Heading (md)</Heading>
      <Heading size="lg">Heading (lg)</Heading>
      <Heading size="xl">Heading (xl)</Heading>
      <Heading size="2xl">Heading (2xl)</Heading>
      <Heading size="3xl">Heading (3xl)</Heading>
      <Heading size="4xl">Heading (4xl)</Heading>
    </Stack>
  )
}
