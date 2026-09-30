import { Section, Stack } from "../canvas/layout"
import { Input } from "./primitives"
import type { SampleProps } from "./types"

export function InputSample(props: SampleProps) {
  return <Input placeholder="you@example.com" {...props} />
}

export function InputDemo() {
  return (
    <>
      <Section title="Variants">
        <Stack>
          <Input variant="outline" placeholder="Outline" />
          <Input variant="subtle" placeholder="Subtle" />
          <Input variant="flushed" placeholder="Flushed" />
        </Stack>
      </Section>
      <Section title="Sizes">
        <Stack>
          <Input size="xs" placeholder="Extra small" />
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </Stack>
      </Section>
      <Section title="States">
        <Stack>
          <Input disabled placeholder="Disabled" />
          <Input aria-invalid placeholder="Invalid" />
        </Stack>
      </Section>
    </>
  )
}
