export { default as Root, type DrawerRootProps as RootProps } from "./drawer-root.svelte"
export {
  default as RootProvider,
  type DrawerRootProviderProps as RootProviderProps,
} from "./drawer-root-provider.svelte"
export { default as Trigger, type DrawerTriggerProps as TriggerProps } from "./drawer-trigger.svelte"
export { default as Backdrop, type DrawerBackdropProps as BackdropProps } from "./drawer-backdrop.svelte"
export { default as Positioner, type DrawerPositionerProps as PositionerProps } from "./drawer-positioner.svelte"
export { default as Content, type DrawerContentProps as ContentProps } from "./drawer-content.svelte"
export { default as Title, type DrawerTitleProps as TitleProps } from "./drawer-title.svelte"
export { default as Description, type DrawerDescriptionProps as DescriptionProps } from "./drawer-description.svelte"
export {
  default as CloseTrigger,
  type DrawerCloseTriggerProps as CloseTriggerProps,
} from "./drawer-close-trigger.svelte"
export { default as Grabber, type DrawerGrabberProps as GrabberProps } from "./drawer-grabber.svelte"
export {
  default as GrabberIndicator,
  type DrawerGrabberIndicatorProps as GrabberIndicatorProps,
} from "./drawer-grabber-indicator.svelte"
export { default as SwipeArea, type DrawerSwipeAreaProps as SwipeAreaProps } from "./drawer-swipe-area.svelte"
export { default as Indent, type DrawerIndentProps as IndentProps } from "./drawer-indent.svelte"
export {
  default as IndentBackground,
  type DrawerIndentBackgroundProps as IndentBackgroundProps,
} from "./drawer-indent-background.svelte"
export { default as Header, type DrawerHeaderProps as HeaderProps } from "./drawer-header.svelte"
export { default as Body, type DrawerBodyProps as BodyProps } from "./drawer-body.svelte"
export { default as Footer, type DrawerFooterProps as FooterProps } from "./drawer-footer.svelte"

import { Drawer } from "@ark-ui/svelte/drawer"

export const ActionTrigger = Drawer.CloseTrigger
export const Context = Drawer.Context
export const Stack = Drawer.Stack
