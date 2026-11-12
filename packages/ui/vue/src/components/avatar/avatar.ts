import { Avatar } from "@ark-ui/vue/avatar"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { type AvatarVariantProps, avatar } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type Component, type FunctionalComponent, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Group, type GroupProps } from "../group"
import { Icon, type IconProps } from "../icon"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(avatar)

type WithRing<T> = Omit<T, "ring"> & Pick<AvatarVariantProps, "ring">

const StyledAvatarRoot = withProvider(Avatar.Root, "root")
export type AvatarRootProps = WithRing<ComponentProps<typeof StyledAvatarRoot>>
export const AvatarRoot = StyledAvatarRoot as unknown as FunctionalComponent<AvatarRootProps>

const StyledAvatarRootProvider = withProvider(Avatar.RootProvider, "root")
export type AvatarRootProviderProps = WithRing<ComponentProps<typeof StyledAvatarRootProvider>>
export const AvatarRootProvider = StyledAvatarRootProvider as unknown as FunctionalComponent<AvatarRootProviderProps>

export const AvatarPropsProvider = PropsProvider

export const AvatarImage = withContext(Avatar.Image, "image", {
  defaultProps: { draggable: false, referrerpolicy: "no-referrer" },
})
export type AvatarImageProps = ComponentProps<typeof AvatarImage>

export type AvatarIconProps = Omit<IconProps, "name"> & {
  /**
   * The icon to show.
   * @default "account"
   */
  name?: IconProps["name"] | undefined
}

export const AvatarIcon: FunctionalComponent<AvatarIconProps> = (props) =>
  h(Icon, { ...props, name: props.name ?? "account" })

export function getInitials(name: string) {
  const names = name.trim().split(/\s+/)
  const first = names[0] ?? ""
  const last = names.length > 1 ? (names[names.length - 1] ?? "") : ""
  return first && last ? `${first.charAt(0)}${last.charAt(0)}` : first.charAt(0)
}

const StyledAvatarFallback = withContext(Avatar.Fallback, "fallback")

export type AvatarFallbackProps = ComponentProps<typeof StyledAvatarFallback> & {
  /**
   * The name to take the initials from. Without it, the fallback shows a user icon.
   */
  name?: string | undefined
}

export const AvatarFallback = defineComponent({
  name: "AvatarFallback",
  inheritAttrs: false,
  props: { name: { type: String, required: false } },
  setup(props, { attrs, slots }) {
    return () =>
      slots.default || attrs.asChild || attrs["as-child"] !== undefined
        ? h(StyledAvatarFallback as Component, attrs, slots)
        : h(StyledAvatarFallback as Component, attrs, () => (props.name ? getInitials(props.name) : h(AvatarIcon)))
  },
}) as unknown as FunctionalComponent<AvatarFallbackProps>

export const AvatarContext = Avatar.Context
export type AvatarContextProps = Avatar.ContextProps

export type AvatarGroupProps = Omit<GroupProps, "ring"> & AvatarVariantProps

export const AvatarGroup: FunctionalComponent<AvatarGroupProps> = (props, { slots }) => {
  const [variantProps, groupProps] = splitProps(props, avatar.variantKeys)
  return h(PropsProvider, { value: variantProps }, () => h(Group, { gap: "0", spaceX: "-3", ...groupProps }, slots))
}
