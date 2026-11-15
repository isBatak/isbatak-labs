<script module lang="ts">
  import { SignaturePad } from "@ark-ui/svelte/signature-pad"

  export type SignaturePadSegmentProps = SignaturePad.SegmentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSignaturePadStyles } from "./signature-pad-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SignaturePadSegmentProps = $props()
  const styles = useSignaturePadStyles()
</script>

<SignaturePad.Segment bind:ref {...props} data-slot="segment" class={[!unstyled && styles().segment, className]} />
