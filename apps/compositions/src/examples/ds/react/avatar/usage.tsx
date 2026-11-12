import { Avatar } from "@isbatak/react-ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
    </Avatar.Root>
  )
}
