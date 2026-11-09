<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuArrowProps = Menu.ArrowProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuArrowProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.Arrow bind:ref {...props} data-slot="arrow" class={[!unstyled && styles().arrow, className]} />
