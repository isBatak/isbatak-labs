import { Button } from "@isbatak/solid-ui/button"
import { SignaturePad, useSignaturePad } from "@isbatak/solid-ui/signature-pad"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function SignaturePadRootProviderDemo() {
  const signaturePad = useSignaturePad()

  return (
    <Stack gap="3" maxW="sm" w="full" align="flex-start">
      <Text textStyle="sm" color="fg.muted">
        Paths: {signaturePad().paths.length}
      </Text>
      <SignaturePad.RootProvider value={signaturePad}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger />
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.RootProvider>
      <Button variant="outline" size="sm" onClick={() => signaturePad().clear()}>
        Clear
      </Button>
    </Stack>
  )
}
