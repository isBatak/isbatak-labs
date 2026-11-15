import { VStack } from "@isbatak/solid-ui/stack"
import { Tone } from "@isbatak/solid-ui/tone"

export function TonePlainDemo() {
  return (
    <VStack gap="2" alignItems="flex-start" textStyle="md" fontWeight="medium">
      <Tone.Root tone="positive" plain>
        <Tone.Indicator color="fg.success" />
        +2.4%
      </Tone.Root>
      <Tone.Root tone="negative" plain>
        <Tone.Indicator color="fg.error" />
        -1.8%
      </Tone.Root>
    </VStack>
  )
}
