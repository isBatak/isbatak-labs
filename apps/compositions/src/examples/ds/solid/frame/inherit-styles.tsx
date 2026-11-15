import { Frame } from "@isbatak/solid-ui/frame"
import { Heading } from "@isbatak/solid-ui/heading"
import { Text } from "@isbatak/solid-ui/text"

export function FrameInheritStylesDemo() {
  let ref: HTMLIFrameElement | undefined
  return (
    <Frame
      ref={(el) => (ref = el)}
      title="Frame with the page's styles"
      onMount={() => {
        const head = ref?.contentDocument?.head
        if (!head) return
        for (const node of document.head.querySelectorAll('style, link[rel="stylesheet"]')) {
          head.appendChild(node.cloneNode(true))
        }
      }}
    >
      <Heading size="lg" p="6" pb="1">
        Ark UI / Frame
      </Heading>
      <Text color="fg.muted" px="6" pb="6">
        This component renders in an iframe that copied the page's stylesheets when it mounted.
      </Text>
    </Frame>
  )
}
