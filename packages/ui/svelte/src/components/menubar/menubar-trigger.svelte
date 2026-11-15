<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenubarTriggerProps = Menu.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenubarStyles } from "./menubar-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenubarTriggerProps = $props()
  const styles = useMenubarStyles()
</script>

<Menu.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
