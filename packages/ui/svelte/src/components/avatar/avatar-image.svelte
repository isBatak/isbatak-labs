<script module lang="ts">
  import { Avatar } from "@ark-ui/svelte/avatar"

  export type AvatarImageProps = Avatar.ImageProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAvatarStyles } from "./avatar-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AvatarImageProps = $props()
  const styles = useAvatarStyles()
</script>

<Avatar.Image
  bind:ref
  draggable="false"
  referrerpolicy="no-referrer"
  {...props}
  data-slot="image"
  class={[!unstyled && styles().image, className]}
/>
