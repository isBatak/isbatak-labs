import { Avatar, useAvatar } from "@isbatak/solid-ui/avatar"
import { Code } from "@isbatak/solid-ui/code"
import { Stack } from "@isbatak/solid-ui/stack"

export function AvatarStoreDemo() {
  const avatar = useAvatar()
  return (
    <Stack align="flex-start">
      <Avatar.RootProvider value={avatar}>
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
        <Avatar.Fallback name="Vincent van Gogh" />
      </Avatar.RootProvider>
      <Code>{avatar().loaded ? "loaded" : "not loaded"}</Code>
    </Stack>
  )
}
