import { Badge } from "@isbatak/solid-ui/badge"
import { Marquee } from "@isbatak/solid-ui/marquee"

export function MarqueePauseOnInteractionDemo() {
  return (
    <Marquee.Root pauseOnInteraction maxW="xl">
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
    </Marquee.Root>
  )
}
