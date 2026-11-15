<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { SignaturePad } from "@isbatak/svelte-ui/signature-pad"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let paths = $state<string[]>([])
</script>

<Stack gap="3" maxW="sm" w="full" align="flex-start">
  <Text textStyle="sm" color="fg.muted">
    Paths: {paths.length}
  </Text>
  <SignaturePad.Root bind:paths>
    <SignaturePad.Label>Sign below</SignaturePad.Label>
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger />
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
  <Button variant="outline" size="sm" onclick={() => (paths = [])}>
    Clear
  </Button>
</Stack>
