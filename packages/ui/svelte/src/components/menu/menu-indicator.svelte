<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuIndicatorProps = Menu.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: MenuIndicatorProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-down" />{/if}
</Menu.Indicator>
