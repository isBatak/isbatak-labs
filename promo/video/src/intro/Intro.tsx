import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { Flex } from "@isbatak/react-ui/flex"
import { Heading } from "@isbatak/react-ui/heading"
import { Text } from "@isbatak/react-ui/text"
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"

export function Intro() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const enter = spring({ frame, fps, config: { damping: 200 } })
  const actions = spring({ frame: frame - 20, fps, config: { damping: 200 } })

  return (
    <Flex position="absolute" inset="0" direction="column" align="center" justify="center" gap="12" bg="bg" color="fg">
      <Flex
        direction="column"
        align="center"
        gap="8"
        style={{ opacity: enter, transform: `translateY(${interpolate(enter, [0, 1], [40, 0])}px)` }}
      >
        <Badge size="lg" variant="outline">
          isbatak labs
        </Badge>
        <Heading as="h1" size="7xl" fontWeight="bold" textAlign="center">
          Made with panda-ds
        </Heading>
        <Text textStyle="2xl" color="fg.muted">
          Remotion, Panda CSS and the design system
        </Text>
      </Flex>
      <Flex gap="4" style={{ opacity: actions, transform: `scale(${interpolate(actions, [0, 1], [0.9, 1])})` }}>
        <Button size="xl">Get started</Button>
        <Button size="xl" variant="outline">
          Read the docs
        </Button>
      </Flex>
    </Flex>
  )
}
