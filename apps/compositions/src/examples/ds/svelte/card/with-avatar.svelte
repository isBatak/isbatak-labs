<script lang="ts">
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { Card } from "@isbatak/svelte-ui/card"
  import { Button } from "@isbatak/svelte-ui/button"
</script>

<Card.Root maxW="sm">
  <Card.Header>
    <Avatar.Root size="lg" shape="rounded">
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
      <Avatar.Fallback name="Segun Adebayo" />
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
