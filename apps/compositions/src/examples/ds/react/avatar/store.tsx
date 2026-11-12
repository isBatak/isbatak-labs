import { Avatar, useAvatar } from "@isbatak/react-ui/avatar"
import { Code } from "@isbatak/react-ui/code"
import { Stack } from "@isbatak/react-ui/stack"

export function AvatarStoreDemo() {
  const avatar = useAvatar()
  return (
    <Stack align="flex-start">
      <Avatar.RootProvider value={avatar}>
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.RootProvider>
      <Code>{avatar.loaded ? "loaded" : "not loaded"}</Code>
    </Stack>
  )
}
