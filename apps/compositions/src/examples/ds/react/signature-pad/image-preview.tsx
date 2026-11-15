import { Image } from "@isbatak/react-ui/image"
import { SignaturePad } from "@isbatak/react-ui/signature-pad"
import { Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"
import { useState } from "react"

export function SignaturePadImagePreviewDemo() {
  const [imageUrl, setImageUrl] = useState("")

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
        {imageUrl && (
          <Image src={imageUrl} alt="Signature preview" bg="white" borderRadius="l2" borderWidth="1px" maxW="full" />
        )}
      </Stack>
    </Stack>
  )
}
