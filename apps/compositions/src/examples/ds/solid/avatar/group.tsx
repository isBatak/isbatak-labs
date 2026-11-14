import { Avatar, AvatarGroup } from "@isbatak/solid-ui/avatar"

export function AvatarGroupDemo() {
  return (
    <AvatarGroup size="lg">
      <Avatar.Root>
        <Avatar.Fallback name="Claude Monet" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Rembrandt van Rijn" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Élisabeth Vigée Le Brun" />
        <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg/330px-Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg" />
      </Avatar.Root>
      <Avatar.Root variant="solid">
        <Avatar.Fallback>+3</Avatar.Fallback>
      </Avatar.Root>
    </AvatarGroup>
  )
}
