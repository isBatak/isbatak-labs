import { Card } from "@isbatak/react-ui/card"
import { Button } from "@isbatak/react-ui/button"

export function CardDemo() {
  return (
    <Card.Root maxW="sm">
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
