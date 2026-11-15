<script lang="ts">
  import { Image } from "@isbatak/svelte-ui/image"
  import { SignaturePad } from "@isbatak/svelte-ui/signature-pad"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let imageUrl = $state("")
</script>

<Stack gap="4" maxW="sm" w="full">
  <SignaturePad.Root onDrawEnd={(details) => details.getDataUrl("image/png").then((url) => (imageUrl = url))}>
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
    {#if imageUrl}
      <Image src={imageUrl} alt="Signature preview" bg="white" borderRadius="l2" borderWidth="1px" maxW="full" />
    {/if}
  </Stack>
</Stack>
