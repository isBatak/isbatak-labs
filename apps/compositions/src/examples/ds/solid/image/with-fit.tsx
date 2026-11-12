import { Image } from "@isbatak/solid-ui/image"

export function ImageWithFitDemo() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=640"
      alt="A lake between mountains"
      fit="contain"
      h="40"
      w="xs"
      borderRadius="l2"
      borderWidth="1px"
    />
  )
}
