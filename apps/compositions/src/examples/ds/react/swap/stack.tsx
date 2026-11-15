import { useState } from "react"
import { Button } from "@isbatak/react-ui/button"
import { Center } from "@isbatak/react-ui/center"
import { Stack } from "@isbatak/react-ui/stack"
import { Swap } from "@isbatak/react-ui/swap"

export function SwapStackDemo() {
  const [swapped, setSwapped] = useState(false)
  return (
    <Stack gap="4" alignItems="flex-start">
      <Button variant="outline" onClick={() => setSwapped((value) => !value)}>
        Next account
      </Button>
      <Swap.Root
        variant="stack"
        swap={swapped}
        data-direction={swapped ? "forward" : "backward"}
        w="60"
        h="32"
        borderRadius="l3"
      >
        <Swap.Indicator type="off">
          <Center boxSize="full" bg="bg.emphasized" color="fg" borderRadius="l3" fontWeight="medium">
            Account 5
          </Center>
        </Swap.Indicator>
        <Swap.Indicator type="on">
          <Center
            boxSize="full"
            bg="colorPalette.solid"
            color="colorPalette.contrast"
            borderRadius="l3"
            fontWeight="medium"
          >
            Account 7
          </Center>
        </Swap.Indicator>
      </Swap.Root>
    </Stack>
  )
}
