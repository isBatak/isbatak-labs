import { AspectRatio } from "@isbatak/solid-ui/aspect-ratio"

export function AspectRatioWithMapDemo() {
  return (
    <AspectRatio ratio={16 / 9} w="full" maxW="md">
      <iframe
        title="Map of Zagreb"
        src="https://www.openstreetmap.org/export/embed.html?bbox=15.94,45.79,16.0,45.83&layer=mapnik"
      />
    </AspectRatio>
  )
}
