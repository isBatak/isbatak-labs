import { Image } from "@isbatak/react-ui/image"

export function ImageWithFitDemo() {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
      alt="The Hay Wain by John Constable"
      fit="contain"
      h="40"
      w="xs"
      borderRadius="l2"
      borderWidth="1px"
    />
  )
}
