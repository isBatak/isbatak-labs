<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuCheckboxItemProps = Menu.CheckboxItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), checked = $bindable(), unstyled, class: className, ...props }: MenuCheckboxItemProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.CheckboxItem bind:ref bind:checked {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
