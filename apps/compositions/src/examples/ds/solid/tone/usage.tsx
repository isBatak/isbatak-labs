import { VStack } from "@isbatak/solid-ui/stack"
import { Tone } from "@isbatak/solid-ui/tone"

export function ToneDemo() {
  return (
    <VStack gap="2" alignItems="flex-start" textStyle="md" fontWeight="medium">
      <Tone.Root tone="positive">
        <Tone.Indicator />
        100.001
      </Tone.Root>
      <Tone.Root tone="negative">
        <Tone.Indicator />
        100.001
      </Tone.Root>
      <Tone.Root tone="neutral" color="fg.muted">
        <Tone.Indicator />
        100.001
      </Tone.Root>
    </VStack>
  )
}
