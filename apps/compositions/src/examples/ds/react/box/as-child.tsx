import { Box } from "@isbatak/react-ui/box"

export function BoxAsChildDemo() {
  return (
    <Box asChild color="fg.muted" textDecoration="underline" _hover={{ color: "fg" }}>
      <a href="#box">Rendered as a link</a>
    </Box>
  )
}
