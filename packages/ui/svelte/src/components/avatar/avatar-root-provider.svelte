<script module lang="ts">
  import { Avatar } from "@ark-ui/svelte/avatar"
  import { avatar, type AvatarVariantProps } from "@isbatak/panda-ds/recipes"

  export type AvatarRootProviderProps = Avatar.RootProviderProps & AvatarVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { hasAvatarProps, provideAvatarStyles, useAvatarProps } from "./avatar-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AvatarRootProviderProps = $props()
  const contextProps = hasAvatarProps() ? useAvatarProps() : undefined
  const [variantProps, localProps] = $derived(avatar.splitVariantProps({ ...contextProps?.(), ...props }))
  const styles = $derived(avatar(variantProps))
  provideAvatarStyles(() => styles)
</script>

<Avatar.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
