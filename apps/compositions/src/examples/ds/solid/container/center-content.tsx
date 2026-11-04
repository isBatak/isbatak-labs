import { Box } from "@isbatak/solid-ui/box"
import { Container } from "@isbatak/solid-ui/container"

export function ContainerCenterContentDemo() {
  return (
    <Container centerContent bg="bg.muted" py="6" borderRadius="l2" gap="2">
      <Box bg="bg.emphasized" px="4" py="2" borderRadius="l1">
        Centered
      </Box>
      <Box bg="bg.emphasized" px="4" py="2" borderRadius="l1">
        Children
      </Box>
    </Container>
  )
}
