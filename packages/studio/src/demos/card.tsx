import { Button } from "@isbatak/react-ui/button"

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
