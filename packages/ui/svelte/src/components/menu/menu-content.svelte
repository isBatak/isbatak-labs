<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuContentProps = Menu.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuContentProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
