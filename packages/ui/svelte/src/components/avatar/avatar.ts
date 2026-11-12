import { Avatar } from "@ark-ui/svelte/avatar"

export { default as AvatarRoot, type AvatarRootProps } from "./avatar-root.svelte"
export { default as AvatarRootProvider, type AvatarRootProviderProps } from "./avatar-root-provider.svelte"
export { default as AvatarImage, type AvatarImageProps } from "./avatar-image.svelte"
export { default as AvatarFallback, type AvatarFallbackProps } from "./avatar-fallback.svelte"
export { default as AvatarIcon, type AvatarIconProps } from "./avatar-icon.svelte"
export { default as AvatarGroup, type AvatarGroupProps } from "./avatar-group.svelte"
export { getInitials } from "./get-initials"
export const AvatarContext = Avatar.Context
export type AvatarContextProps = Avatar.ContextProps
