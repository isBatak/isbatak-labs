import { Image } from "@isbatak/solid-ui/image"
import { Show, createSignal } from "solid-js"
import { SignaturePad } from "@isbatak/solid-ui/signature-pad"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function SignaturePadImagePreviewDemo() {
  const [imageUrl, setImageUrl] = createSignal("")

  return (
    <Stack gap="4" maxW="sm" w="full">
      <SignaturePad.Root onDrawEnd={(details) => details.getDataUrl("image/png").then(setImageUrl)}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger />
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.Root>
      <Stack gap="2">
        <Text textStyle="sm" fontWeight="medium">
          Preview
        </Text>
        <Show when={imageUrl()}>
          <Image src={imageUrl()} alt="Signature preview" bg="white" borderRadius="l2" borderWidth="1px" maxW="full" />
        </Show>
      </Stack>
    </Stack>
  )
}
