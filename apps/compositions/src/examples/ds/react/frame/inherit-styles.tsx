import { Frame } from "@isbatak/react-ui/frame"
import { Heading } from "@isbatak/react-ui/heading"
import { Text } from "@isbatak/react-ui/text"
import { useRef } from "react"

export function FrameInheritStylesDemo() {
  const ref = useRef<HTMLIFrameElement>(null)
  return (
    <Frame
      ref={ref}
      title="Frame with the page's styles"
      onMount={() => {
        const head = ref.current?.contentDocument?.head
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
