import { Loader } from "@isbatak/solid-ui/loader"
import { Spinner } from "@isbatak/solid-ui/spinner"
import { HStack } from "@isbatak/solid-ui/stack"

export function LoaderCustomSpinnerDemo() {
  return (
    <HStack gap="2" textStyle="sm" fontWeight="medium" colorPalette="blue">
      <Loader text="Saving…" spinner={<Spinner size="sm" showTrack color="colorPalette.solid" />} />
    </HStack>
  )
}
