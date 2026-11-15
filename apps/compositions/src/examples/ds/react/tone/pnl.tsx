import { VStack } from "@isbatak/react-ui/stack"
import { Tone, detectTone } from "@isbatak/react-ui/tone"

export function TonePnlDemo() {
  const profit = 103.24
  const loss = -103.24
  return (
    <VStack gap="2" alignItems="flex-start">
      <Tone.Root tone={detectTone(profit)} textStyle="2xl" fontWeight="semibold" gap="1">
        <Tone.Indicator />
        {Math.abs(profit).toFixed(2)}
      </Tone.Root>
      <Tone.Root tone={detectTone(loss)} textStyle="2xl" fontWeight="semibold" gap="1">
        <Tone.Indicator />
        {Math.abs(loss).toFixed(2)}
      </Tone.Root>
    </VStack>
  )
}
