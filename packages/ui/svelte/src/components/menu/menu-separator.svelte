<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuSeparatorProps = Menu.SeparatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuSeparatorProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.Separator bind:ref {...props} data-slot="separator" class={[!unstyled && styles().separator, className]} />
