import { Button } from "@isbatak/react-ui/button"
import { SignaturePad } from "@isbatak/react-ui/signature-pad"
import { Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"
import { useState } from "react"

export function SignaturePadControlledDemo() {
  const [paths, setPaths] = useState<string[]>([])

  return (
    <Stack gap="3" maxW="sm" w="full" align="flex-start">
      <Text textStyle="sm" color="fg.muted">
        Paths: {paths.length}
      </Text>
      <SignaturePad.Root paths={paths} onDraw={(details) => setPaths(details.paths)}>
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
