<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuContextTriggerProps = Menu.ContextTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuContextTriggerProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.ContextTrigger bind:ref {...props} data-slot="contextTrigger" class={[!unstyled && styles().contextTrigger, className]} />
