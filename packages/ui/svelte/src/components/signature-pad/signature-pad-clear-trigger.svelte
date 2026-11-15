<script module lang="ts">
  import { SignaturePad } from "@ark-ui/svelte/signature-pad"

  export type SignaturePadClearTriggerProps = SignaturePad.ClearTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useSignaturePadStyles } from "./signature-pad-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: SignaturePadClearTriggerProps = $props()
  const styles = useSignaturePadStyles()
</script>

<SignaturePad.ClearTrigger
  bind:ref
  {...props}
  data-slot="clearTrigger"
  class={[!unstyled && styles().clearTrigger, className]}
>
  {#if children}
    {@render children()}
  {:else}
    <Icon name="undo" />
  {/if}
</SignaturePad.ClearTrigger>
