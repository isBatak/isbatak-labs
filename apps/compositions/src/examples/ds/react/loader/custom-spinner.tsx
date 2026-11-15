import { Loader } from "@isbatak/react-ui/loader"
import { Spinner } from "@isbatak/react-ui/spinner"
import { HStack } from "styled-system/jsx"

export function LoaderCustomSpinnerDemo() {
  return (
    <HStack gap="2" textStyle="sm" fontWeight="medium" colorPalette="blue">
      <Loader text="Saving…" spinner={<Spinner size="sm" showTrack color="colorPalette.solid" />} />
    </HStack>
  )
}
