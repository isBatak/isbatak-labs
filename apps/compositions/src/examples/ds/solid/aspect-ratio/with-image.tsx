import { AspectRatio } from "@isbatak/solid-ui/aspect-ratio"

export function AspectRatioWithImageDemo() {
  return (
    <AspectRatio ratio={4 / 3} w="full" maxW="xs" borderRadius="l2" overflow="hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
        alt="The Hay Wain by John Constable"
      />
    </AspectRatio>
  )
}
