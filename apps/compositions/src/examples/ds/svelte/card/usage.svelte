<script lang="ts">
  import { Card } from "@isbatak/svelte-ui/card"
  import { Button } from "@isbatak/svelte-ui/button"
</script>

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
