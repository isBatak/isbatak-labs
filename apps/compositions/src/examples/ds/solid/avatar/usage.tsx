import { Avatar } from "@isbatak/solid-ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
  )
}
