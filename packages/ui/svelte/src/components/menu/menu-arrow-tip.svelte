<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuArrowTipProps = Menu.ArrowTipProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuArrowTipProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.ArrowTip bind:ref {...props} data-slot="arrowTip" class={[!unstyled && styles().arrowTip, className]} />
