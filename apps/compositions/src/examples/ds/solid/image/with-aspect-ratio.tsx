import { Image } from "@isbatak/solid-ui/image"

export function ImageWithAspectRatioDemo() {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
      alt="The Hay Wain by John Constable"
      aspectRatio="landscape"
      w="xs"
      borderRadius="l2"
    />
  )
}
