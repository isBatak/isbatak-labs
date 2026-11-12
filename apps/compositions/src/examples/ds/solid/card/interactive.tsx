import { Card } from "@isbatak/solid-ui/card"
import { Button } from "@isbatak/solid-ui/button"

export function CardInteractiveDemo() {
  return (
    <Card.Root maxW="sm" interactive>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  )
}
