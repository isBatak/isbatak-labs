<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuContentProps = Menu.ContentProps
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), class: className, ...props }: MenuContentProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.Content bind:ref {...props} data-slot="content" class={[styles().content, className]} />
