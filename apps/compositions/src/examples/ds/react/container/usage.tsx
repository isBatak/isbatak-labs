import { Container } from "@isbatak/react-ui/container"

export function ContainerDemo() {
  return (
    <Container bg="bg.muted" py="6" borderRadius="l2" color="fg.muted">
      The container keeps this text at a readable width and pads it on small screens.
    </Container>
  )
}
