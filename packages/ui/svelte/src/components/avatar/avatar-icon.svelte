<script module lang="ts">
  import type { IconProps } from "../icon"

  export type AvatarIconProps = Omit<IconProps, "name"> & {
    /**
     * The icon to show.
     * @default "account"
     */
    name?: IconProps["name"] | undefined
  }
</script>

<script lang="ts">
  import { Icon } from "../icon"

  let { name = "account", ...props }: AvatarIconProps = $props()
</script>

<Icon {name} {...props} />
