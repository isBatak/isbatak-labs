import { Badge } from "@isbatak/solid-ui/badge"
import { Button, ButtonGroup } from "@isbatak/solid-ui/button"
import { Marquee, useMarquee } from "@isbatak/solid-ui/marquee"
import { Stack } from "@isbatak/solid-ui/stack"

export function MarqueeProgrammaticControlDemo() {
  const marquee = useMarquee()

  return (
    <Stack gap="4" maxW="xl">
      <Marquee.RootProvider value={marquee}>
        <Marquee.Viewport>
          <Marquee.Content>
            <Marquee.Item>
              <Badge variant="outline" size="lg">
                🍎 Apple
              </Badge>
            </Marquee.Item>
            <Marquee.Item>
              <Badge variant="outline" size="lg">
                🍌 Banana
              </Badge>
            </Marquee.Item>
            <Marquee.Item>
              <Badge variant="outline" size="lg">
                🍒 Cherry
              </Badge>
            </Marquee.Item>
            <Marquee.Item>
              <Badge variant="outline" size="lg">
                🍇 Grape
              </Badge>
            </Marquee.Item>
            <Marquee.Item>
              <Badge variant="outline" size="lg">
                🍉 Watermelon
              </Badge>
            </Marquee.Item>
            <Marquee.Item>
              <Badge variant="outline" size="lg">
                🍓 Strawberry
              </Badge>
            </Marquee.Item>
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.RootProvider>
      <ButtonGroup variant="outline" size="sm">
        <Button onClick={() => marquee().pause()}>Pause</Button>
        <Button onClick={() => marquee().resume()}>Resume</Button>
      </ButtonGroup>
    </Stack>
  )
}
