import { Avatar } from "@isbatak/solid-ui/avatar"
import { HStack } from "@isbatak/solid-ui/stack"

export function AvatarSizesDemo() {
  return (
    <HStack gap="3">
      <Avatar.Root size="2xs">
        <Avatar.Fallback name="Vincent van Gogh" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
      </Avatar.Root>
      <Avatar.Root size="xs">
        <Avatar.Fallback name="Vincent van Gogh" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
      </Avatar.Root>
      <Avatar.Root size="sm">
        <Avatar.Fallback name="Vincent van Gogh" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
      </Avatar.Root>
      <Avatar.Root size="md">
        <Avatar.Fallback name="Vincent van Gogh" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
      </Avatar.Root>
      <Avatar.Root size="lg">
        <Avatar.Fallback name="Vincent van Gogh" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
      </Avatar.Root>
      <Avatar.Root size="xl">
        <Avatar.Fallback name="Vincent van Gogh" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
      </Avatar.Root>
      <Avatar.Root size="2xl">
        <Avatar.Fallback name="Vincent van Gogh" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
      </Avatar.Root>
    </HStack>
  )
}
