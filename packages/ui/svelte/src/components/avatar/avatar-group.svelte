<script module lang="ts">
  import type { AvatarVariantProps } from "@isbatak/panda-ds/recipes"
  import type { GroupProps } from "../group"

  export type AvatarGroupProps = GroupProps & AvatarVariantProps
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { avatar } from "@isbatak/panda-ds/recipes"
  import { Group } from "../group"
  import { provideAvatarProps } from "./avatar-styles"

  let { ref = $bindable(null), class: className, ...props }: AvatarGroupProps = $props()
  const [variantProps, groupProps] = $derived(splitProps(props, avatar.variantKeys))
  provideAvatarProps(() => variantProps)
</script>

<Group bind:ref {...groupProps} class={[css({ gap: "0", spaceX: "-3" }), className]} />
