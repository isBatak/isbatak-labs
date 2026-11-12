import { Avatar, useAvatar } from "@isbatak/solid-ui/avatar"
import { Code } from "@isbatak/solid-ui/code"
import { Stack } from "@isbatak/solid-ui/stack"

export function AvatarStoreDemo() {
  const avatar = useAvatar()
  return (
    <Stack align="flex-start">
      <Avatar.RootProvider value={avatar}>
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.RootProvider>
      <Code>{avatar().loaded ? "loaded" : "not loaded"}</Code>
    </Stack>
  )
}
