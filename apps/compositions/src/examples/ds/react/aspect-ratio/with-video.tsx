import { AspectRatio } from "@isbatak/react-ui/aspect-ratio"

export function AspectRatioWithVideoDemo() {
  return (
    <AspectRatio ratio={16 / 9} w="full" maxW="md">
      <iframe title="Big Buck Bunny" src="https://www.youtube.com/embed/aqz-KE-bpKQ" allowFullScreen />
    </AspectRatio>
  )
}
