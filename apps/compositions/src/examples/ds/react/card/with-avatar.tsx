import { Avatar } from "@isbatak/react-ui/avatar"
import { Card } from "@isbatak/react-ui/card"
import { Button } from "@isbatak/react-ui/button"

export function CardWithAvatarDemo() {
  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
          <Avatar.Fallback name="Vincent van Gogh" />
        </Avatar.Root>
      </Card.Header>
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
