import { Button } from "@isbatak/react-ui/button"
import { card } from "@isbatak/panda-ds/recipes"

import { Card } from "../canvas/primitives"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const cardMatrix = defineComponentMatrix({
  recipe: card,
  render: (props) => (
    <Card.Root maxW="xs" {...props}>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Description>This card uses the {String(props.size ?? "default")} size.</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </Card.Footer>
    </Card.Root>
  ),
})
