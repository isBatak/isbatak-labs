import { Badge } from "@isbatak/react-ui/badge"
import { Marquee } from "@isbatak/react-ui/marquee"

export function MarqueeAutoFillDemo() {
  return (
    <Marquee.Root autoFill spacing="2rem" maxW="xl">
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
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  )
}
