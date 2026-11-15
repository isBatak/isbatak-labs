<script module lang="ts">
  import { SignaturePad } from "@ark-ui/svelte/signature-pad"

  export type SignaturePadGuideProps = SignaturePad.GuideProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSignaturePadStyles } from "./signature-pad-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SignaturePadGuideProps = $props()
  const styles = useSignaturePadStyles()
</script>

<SignaturePad.Guide bind:ref {...props} data-slot="guide" class={[!unstyled && styles().guide, className]} />
