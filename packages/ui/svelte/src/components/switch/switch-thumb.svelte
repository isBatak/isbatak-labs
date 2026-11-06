<script module lang="ts">
  import { Switch } from "@ark-ui/svelte/switch"

  export type SwitchThumbProps = Switch.ThumbProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSwitchStyles } from "./switch-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SwitchThumbProps = $props()
  const styles = useSwitchStyles()
</script>

<Switch.Thumb bind:ref {...props} data-slot="thumb" class={[!unstyled && styles().thumb, className]} />
