<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Center } from "@isbatak/svelte-ui/center"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Swap } from "@isbatak/svelte-ui/swap"
  import { css } from "styled-system/css"

  let swapped = $state(false)
</script>

<Stack gap="4" alignItems="flex-start">
  <Button variant="outline" onclick={() => (swapped = !swapped)}>Next account</Button>
  <Swap.Root
    variant="stack"
    swap={swapped}
    data-direction={swapped ? "forward" : "backward"}
    class={css({ w: "60", h: "32", borderRadius: "l3" })}
  >
    <Swap.Indicator type="off">
      <Center boxSize="full" bg="bg.emphasized" color="fg" borderRadius="l3" fontWeight="medium">Account 5</Center>
    </Swap.Indicator>
    <Swap.Indicator type="on">
      <Center boxSize="full" bg="colorPalette.solid" color="colorPalette.contrast" borderRadius="l3" fontWeight="medium">
        Account 7
      </Center>
    </Swap.Indicator>
  </Swap.Root>
</Stack>
