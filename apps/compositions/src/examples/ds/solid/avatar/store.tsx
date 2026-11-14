import { Avatar, useAvatar } from "@isbatak/solid-ui/avatar"
import { Code } from "@isbatak/solid-ui/code"
import { Stack } from "@isbatak/solid-ui/stack"

export function AvatarStoreDemo() {
  const avatar = useAvatar()
  return (
    <Stack align="flex-start">
      <Avatar.RootProvider value={avatar}>
        <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
        <Avatar.Fallback name="Jane Doe" />
      </Avatar.RootProvider>
      <Code>{avatar().loaded ? "loaded" : "not loaded"}</Code>
    </Stack>
  )
}
