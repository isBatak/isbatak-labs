import { Icon } from "@isbatak/solid-ui/icon"
import { VStack } from "@isbatak/solid-ui/stack"
import { Tone } from "@isbatak/solid-ui/tone"

export function ToneCustomIndicatorDemo() {
  return (
    <VStack gap="2" alignItems="flex-start" textStyle="md" fontWeight="medium">
      <Tone.Root tone="positive" gap="1">
        <Tone.Indicator>
          <Icon name="arrow-up" />
        </Tone.Indicator>
        12 400
      </Tone.Root>
      <Tone.Root tone="negative" gap="1">
        <Tone.Indicator>
          <Icon name="arrow-down" />
        </Tone.Indicator>
        3 150
      </Tone.Root>
    </VStack>
  )
}
