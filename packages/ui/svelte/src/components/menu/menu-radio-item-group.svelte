<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuRadioItemGroupProps = Menu.RadioItemGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), value = $bindable(""), unstyled, class: className, ...props }: MenuRadioItemGroupProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.RadioItemGroup bind:ref bind:value {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]} />
