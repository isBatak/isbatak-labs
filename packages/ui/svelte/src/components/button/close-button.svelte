<script module lang="ts">
  import type { IconButtonProps } from "./icon-button.svelte"

  export type CloseButtonProps = IconButtonProps
</script>

<script lang="ts">
  import Icon from "../icon/icon.svelte"
  import IconButton from "./icon-button.svelte"

  let { ref = $bindable(null), children, ...props }: CloseButtonProps = $props()
</script>

<IconButton bind:ref variant="ghost" aria-label="Close" {...props}>
  {#if children}
    {@render children()}
  {:else}
    <Icon name="close" />
  {/if}
</IconButton>
