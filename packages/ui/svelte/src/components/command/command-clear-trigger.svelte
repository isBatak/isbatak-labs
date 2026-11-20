<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandClearTriggerProps = Combobox.ClearTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: CommandClearTriggerProps = $props()
  const styles = useCommandStyles()
</script>

<Combobox.ClearTrigger
  bind:ref
  aria-label="Clear search"
  {...props}
  data-slot="clearTrigger"
  class={[!unstyled && styles().clearTrigger, className]}
>
  {#if children}{@render children()}{:else}<Icon name="close" />{/if}
</Combobox.ClearTrigger>
