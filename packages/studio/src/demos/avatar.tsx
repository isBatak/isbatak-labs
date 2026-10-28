import { Row, Section } from "../canvas/layout"
import { Avatar } from "./primitives"
import type { SampleProps } from "./types"

export function AvatarSample(props: SampleProps) {
  return (
    <Avatar.Root {...props}>
      <Avatar.Fallback>IB</Avatar.Fallback>
    </Avatar.Root>
  )
}

export function AvatarDemo() {
  return (
    <>
      <Section title="Basic">
        <Row>
          <AvatarSample />
          <Avatar.Root>
            <Avatar.Fallback>PS</Avatar.Fallback>
            <Avatar.Image src="https://i.pravatar.cc/300?u=panda" alt="" />
          </Avatar.Root>
        </Row>
      </Section>
      <Section title="Variants">
        <Row>
          <AvatarSample variant="solid" />
          <AvatarSample variant="subtle" />
          <AvatarSample variant="outline" />
        </Row>
      </Section>
      <Section title="Sizes">
        <Row>
          <AvatarSample size="xs" />
          <AvatarSample size="sm" />
          <AvatarSample size="md" />
          <AvatarSample size="lg" />
          <AvatarSample size="xl" />
          <AvatarSample size="2xl" />
        </Row>
      </Section>
    </>
  )
}
