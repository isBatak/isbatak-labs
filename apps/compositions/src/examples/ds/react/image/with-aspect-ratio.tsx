import { Image } from "@isbatak/react-ui/image"

export function ImageWithAspectRatioDemo() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=640"
      alt="A lake between mountains"
      aspectRatio="landscape"
      w="xs"
      borderRadius="l2"
    />
  )
}
