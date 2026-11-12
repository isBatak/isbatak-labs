import { Avatar } from "@ark-ui/solid/avatar"
import { type AvatarVariantProps, avatar } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { type Component, type ComponentProps, Show, splitProps } from "solid-js"

import { Group, type GroupProps } from "../group"
import { Icon, type IconProps } from "../icon/icon"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(avatar)

type WithRing<T> = Omit<T, "ring"> & Pick<AvatarVariantProps, "ring">

const StyledAvatarRoot = withProvider(Avatar.Root, "root")
export type AvatarRootProps = WithRing<ComponentProps<typeof StyledAvatarRoot>>
export const AvatarRoot = StyledAvatarRoot as Component<AvatarRootProps>

const StyledAvatarRootProvider = withProvider(Avatar.RootProvider, "root")
export type AvatarRootProviderProps = WithRing<ComponentProps<typeof StyledAvatarRootProvider>>
export const AvatarRootProvider = StyledAvatarRootProvider as Component<AvatarRootProviderProps>

export const AvatarPropsProvider = PropsProvider

export const AvatarImage = withContext(Avatar.Image, "image", {
  defaultProps: { draggable: false, referrerPolicy: "no-referrer" },
})
export type AvatarImageProps = ComponentProps<typeof AvatarImage>

export type AvatarIconProps = Omit<IconProps, "name"> & {
  /**
   * The icon to show.
   * @default "account"
   */
  name?: IconProps["name"] | undefined
}

export function AvatarIcon(props: AvatarIconProps) {
  const [local, rest] = splitProps(props, ["name"])
  return <Icon name={local.name ?? "account"} {...rest} />
}

export function getInitials(name: string) {
  const names = name.trim().split(/\s+/)
  const first = names[0] ?? ""
  const last = names.length > 1 ? (names[names.length - 1] ?? "") : ""
  return first && last ? `${first.charAt(0)}${last.charAt(0)}` : first.charAt(0)
}

const StyledAvatarFallback = withContext(Avatar.Fallback, "fallback")

export interface AvatarFallbackProps extends ComponentProps<typeof StyledAvatarFallback> {
  /**
   * The name to take the initials from. Without it, the fallback shows a user icon.
   */
  name?: string | undefined
}

export function AvatarFallback(props: AvatarFallbackProps) {
  const [local, rest] = splitProps(props, ["name", "children"])
  return (
    <Show
      when={local.children || rest.asChild}
      fallback={
        <StyledAvatarFallback {...rest}>
          <Show when={local.name} fallback={<AvatarIcon />}>
            {(name) => getInitials(name())}
          </Show>
        </StyledAvatarFallback>
      }
    >
      <StyledAvatarFallback {...rest}>{local.children}</StyledAvatarFallback>
    </Show>
  )
}

export const AvatarContext = Avatar.Context
export type AvatarContextProps = Avatar.ContextProps

export interface AvatarGroupProps extends Omit<GroupProps, "ring">, AvatarVariantProps {}

export function AvatarGroup(props: AvatarGroupProps) {
  const [variantProps, groupProps] = splitProps(props, avatar.variantKeys)
  return (
    <PropsProvider value={variantProps}>
      <Group gap="0" spaceX="-3" {...groupProps} />
    </PropsProvider>
  )
}
