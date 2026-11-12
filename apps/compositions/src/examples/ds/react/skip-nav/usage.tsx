import { Link } from "@isbatak/react-ui/link"
import { SkipNavContent, SkipNavLink } from "@isbatak/react-ui/skip-nav"
import { HStack, Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function SkipNavDemo() {
  return (
    <Stack gap="4">
      <SkipNavLink>Skip to content</SkipNavLink>
      <Text textStyle="sm" color="fg.muted">
        Click here, then press Tab to show the skip link.
      </Text>
      <HStack gap="4">
        <Link href="#home">Home</Link>
        <Link href="#docs">Docs</Link>
        <Link href="#blog">Blog</Link>
      </HStack>
      <SkipNavContent>
        <Text>The skip link moves focus here, past the navigation.</Text>
      </SkipNavContent>
    </Stack>
  )
}
