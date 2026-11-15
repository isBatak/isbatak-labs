import { Button } from "@isbatak/solid-ui/button"
import { createSignal } from "solid-js"
import { SignaturePad } from "@isbatak/solid-ui/signature-pad"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function SignaturePadControlledDemo() {
  const [paths, setPaths] = createSignal<string[]>([])

  return (
    <Stack gap="3" maxW="sm" w="full" align="flex-start">
      <Text textStyle="sm" color="fg.muted">
        Paths: {paths().length}
      </Text>
      <SignaturePad.Root paths={paths()} onDraw={(details) => setPaths(details.paths)}>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger />
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.Root>
      <Button variant="outline" size="sm" onClick={() => setPaths([])}>
        Clear
      </Button>
    </Stack>
  )
}
