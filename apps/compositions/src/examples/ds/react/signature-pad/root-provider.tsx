import { Button } from "@isbatak/react-ui/button"
import { SignaturePad, useSignaturePad } from "@isbatak/react-ui/signature-pad"
import { Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function SignaturePadRootProviderDemo() {
  const signaturePad = useSignaturePad()

  return (
    <Stack gap="3" maxW="sm" w="full" align="flex-start">
      <Text textStyle="sm" color="fg.muted">
        Paths: {signaturePad.paths.length}
      </Text>
      <SignaturePad.RootProvider value={signaturePad}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger />
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.RootProvider>
      <Button variant="outline" size="sm" onClick={() => signaturePad.clear()}>
        Clear
      </Button>
    </Stack>
  )
}
