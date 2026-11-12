<script module lang="ts">
  import { Avatar } from "@ark-ui/svelte/avatar"

  export type AvatarFallbackProps = Avatar.FallbackProps & {
    /**
     * The name to take the initials from. Without it, the fallback shows a user icon.
     */
    name?: string | undefined
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts">
  import AvatarIcon from "./avatar-icon.svelte"
  import { useAvatarStyles } from "./avatar-styles"
  import { getInitials } from "./get-initials"

  let { ref = $bindable(null), name, unstyled, class: className, children, ...props }: AvatarFallbackProps = $props()
  const styles = useAvatarStyles()
</script>

<Avatar.Fallback bind:ref {...props} data-slot="fallback" class={[!unstyled && styles().fallback, className]}>
  {#if children || props.asChild}
    {@render children?.()}
  {:else if name}
    {getInitials(name)}
  {:else}
    <AvatarIcon />
  {/if}
</Avatar.Fallback>
