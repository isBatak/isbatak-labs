<script module lang="ts">
  import { SignaturePad } from "@ark-ui/svelte/signature-pad"

  export type SignaturePadLabelProps = SignaturePad.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSignaturePadStyles } from "./signature-pad-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SignaturePadLabelProps = $props()
  const styles = useSignaturePadStyles()
</script>

<SignaturePad.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
