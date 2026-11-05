import { Box } from "@isbatak/solid-ui/box"

export function BoxAsChildDemo() {
  return (
    <Box
      color="fg.muted"
      textDecoration="underline"
      _hover={{ color: "fg" }}
      asChild={(props) => (
        <a {...props()} href="#box">
          Rendered as a link
        </a>
      )}
    />
  )
}
