"use client"

import { Avatar } from "@ark-ui/react/avatar"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { type AvatarVariantProps, avatar } from "@isbatak/panda-ds/recipes"
import type { ComponentProps, JSX } from "react"

import { Group, type GroupProps } from "../group"
import { Icon, type IconProps } from "../icon/icon"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(avatar)

type WithRing<T> = Omit<T, "ring"> & Pick<AvatarVariantProps, "ring">

const StyledAvatarRoot = withProvider(Avatar.Root, "root")
export type AvatarRootProps = WithRing<ComponentProps<typeof StyledAvatarRoot>>
export const AvatarRoot = StyledAvatarRoot as (props: AvatarRootProps) => JSX.Element

const StyledAvatarRootProvider = withProvider(Avatar.RootProvider, "root")
export type AvatarRootProviderProps = WithRing<ComponentProps<typeof StyledAvatarRootProvider>>
export const AvatarRootProvider = StyledAvatarRootProvider as (props: AvatarRootProviderProps) => JSX.Element

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

export function AvatarIcon({ name = "account", ...props }: AvatarIconProps) {
  return <Icon name={name} {...props} />
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

export function AvatarFallback({ name, children, ...props }: AvatarFallbackProps) {
  if (children || props.asChild) return <StyledAvatarFallback {...props}>{children}</StyledAvatarFallback>
  return <StyledAvatarFallback {...props}>{name ? getInitials(name) : <AvatarIcon />}</StyledAvatarFallback>
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
