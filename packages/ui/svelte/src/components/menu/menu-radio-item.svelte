<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuRadioItemProps = Menu.RadioItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuRadioItemProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.RadioItem bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
