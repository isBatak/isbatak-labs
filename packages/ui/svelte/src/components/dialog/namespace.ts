export { default as Root, type DialogRootProps as RootProps } from "./dialog-root.svelte"
export {
  default as RootProvider,
  type DialogRootProviderProps as RootProviderProps,
} from "./dialog-root-provider.svelte"
export { default as Trigger, type DialogTriggerProps as TriggerProps } from "./dialog-trigger.svelte"
export { default as Backdrop, type DialogBackdropProps as BackdropProps } from "./dialog-backdrop.svelte"
export { default as Positioner, type DialogPositionerProps as PositionerProps } from "./dialog-positioner.svelte"
export { default as Content, type DialogContentProps as ContentProps } from "./dialog-content.svelte"
export { default as Title, type DialogTitleProps as TitleProps } from "./dialog-title.svelte"
export { default as Description, type DialogDescriptionProps as DescriptionProps } from "./dialog-description.svelte"
export {
  default as CloseTrigger,
  type DialogCloseTriggerProps as CloseTriggerProps,
} from "./dialog-close-trigger.svelte"
export { default as Header, type DialogHeaderProps as HeaderProps } from "./dialog-header.svelte"
export { default as Body, type DialogBodyProps as BodyProps } from "./dialog-body.svelte"
export { default as Footer, type DialogFooterProps as FooterProps } from "./dialog-footer.svelte"

import { Dialog } from "@ark-ui/svelte/dialog"

export const ActionTrigger = Dialog.CloseTrigger
export const Context = Dialog.Context
