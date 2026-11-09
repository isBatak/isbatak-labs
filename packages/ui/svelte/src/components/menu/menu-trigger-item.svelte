<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuTriggerItemProps = Menu.TriggerItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuTriggerItemProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.TriggerItem bind:ref {...props} data-slot="triggerItem" class={[!unstyled && styles().triggerItem, className]} />
