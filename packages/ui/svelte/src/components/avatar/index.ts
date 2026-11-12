export {
  AvatarRoot,
  AvatarRootProvider,
  AvatarImage,
  AvatarFallback,
  AvatarIcon,
  AvatarGroup,
  AvatarContext,
  getInitials,
} from "./avatar"

export type {
  AvatarRootProps,
  AvatarRootProviderProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarIconProps,
  AvatarGroupProps,
  AvatarContextProps,
} from "./avatar"

export { useAvatar, useAvatarContext } from "@ark-ui/svelte/avatar"
export type { AvatarStatusChangeDetails, UseAvatarProps, UseAvatarReturn } from "@ark-ui/svelte/avatar"

export * as Avatar from "./namespace"
