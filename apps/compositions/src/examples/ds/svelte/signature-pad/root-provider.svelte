<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { SignaturePad, useSignaturePad } from "@isbatak/svelte-ui/signature-pad"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  const id = $props.id()
  const signaturePad = useSignaturePad({ id })
</script>

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
  <Button variant="outline" size="sm" onclick={() => signaturePad().clear()}>
    Clear
  </Button>
</Stack>
