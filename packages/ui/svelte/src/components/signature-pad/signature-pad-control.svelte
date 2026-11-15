<script module lang="ts">
  import { SignaturePad } from "@ark-ui/svelte/signature-pad"

  export type SignaturePadControlProps = SignaturePad.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSignaturePadStyles } from "./signature-pad-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SignaturePadControlProps = $props()
  const styles = useSignaturePadStyles()
</script>

<SignaturePad.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
