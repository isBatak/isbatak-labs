import { Button } from "@isbatak/react-ui/button"

import { Section, Stack } from "../canvas/layout"
import { Card } from "./primitives"
import type { SampleProps } from "./types"

export function CardSample(props: SampleProps) {
  return (
    <Card.Root maxW="xs" {...props}>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Description>This card uses the {props.size ?? "default"} size.</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export function CardDemo() {
  return (
    <>
      <Section title="Default size">
        <Card.Root>
          <Card.Header>
            <Card.Title>Default Card</Card.Title>
            <Card.Description>This card uses the default size variant.</Card.Description>
          </Card.Header>
          <Card.Body>
            The card component supports a size prop that defaults to "md" for standard spacing and sizing.
          </Card.Body>
          <Card.Footer>
            <Button variant="outline" w="full">
              Action
            </Button>
          </Card.Footer>
        </Card.Root>
      </Section>
      <Section title="Small size">
        <Card.Root size="sm">
          <Card.Header>
            <Card.Title>Small Card</Card.Title>
            <Card.Description>This card uses the small size variant.</Card.Description>
          </Card.Header>
          <Card.Body>Set the size prop to "sm" for a more compact appearance.</Card.Body>
          <Card.Footer>
            <Button variant="outline" size="sm" w="full">
              Action
            </Button>
          </Card.Footer>
        </Card.Root>
      </Section>
      <Section title="Variants">
        <Stack>
          <CardSample variant="elevated" />
          <CardSample variant="outline" />
          <CardSample variant="subtle" />
        </Stack>
      </Section>
    </>
  )
}
