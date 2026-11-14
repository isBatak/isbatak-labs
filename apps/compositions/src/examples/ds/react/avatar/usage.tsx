import { Avatar } from "@isbatak/react-ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Vincent van Gogh" />
      <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
    </Avatar.Root>
  )
}
