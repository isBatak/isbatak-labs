import { Dialog } from "@ark-ui/solid/dialog"
import type { ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { dialog } from "@isbatak/panda-ds/recipes"

const { withRootProvider, withContext } = createSlotRecipeContext(dialog)

export const DialogRoot = withRootProvider(Dialog.Root, {
  defaultProps: { lazyMount: true, unmountOnExit: true },
})
export type DialogRootProps = ComponentProps<typeof DialogRoot>

export const DialogRootProvider = withRootProvider(Dialog.RootProvider, {
  defaultProps: { lazyMount: true, unmountOnExit: true },
})
export type DialogRootProviderProps = ComponentProps<typeof DialogRootProvider>

export const DialogTrigger = withContext(Dialog.Trigger, "trigger")
export type DialogTriggerProps = ComponentProps<typeof DialogTrigger>

export const DialogBackdrop = withContext(Dialog.Backdrop, "backdrop")
export type DialogBackdropProps = ComponentProps<typeof DialogBackdrop>

export const DialogPositioner = withContext(Dialog.Positioner, "positioner")
export type DialogPositionerProps = ComponentProps<typeof DialogPositioner>

export const DialogContent = withContext(Dialog.Content, "content")
export type DialogContentProps = ComponentProps<typeof DialogContent>

export const DialogTitle = withContext(Dialog.Title, "title")
export type DialogTitleProps = ComponentProps<typeof DialogTitle>

export const DialogDescription = withContext(Dialog.Description, "description")
export type DialogDescriptionProps = ComponentProps<typeof DialogDescription>

export const DialogCloseTrigger = withContext(Dialog.CloseTrigger, "closeTrigger")
export type DialogCloseTriggerProps = ComponentProps<typeof DialogCloseTrigger>

export const DialogActionTrigger = Dialog.CloseTrigger
export type DialogActionTriggerProps = ComponentProps<typeof DialogActionTrigger>

export const DialogHeader = withContext("div", "header")
export type DialogHeaderProps = ComponentProps<typeof DialogHeader>

export const DialogBody = withContext("div", "body")
export type DialogBodyProps = ComponentProps<typeof DialogBody>

export const DialogFooter = withContext("div", "footer")
export type DialogFooterProps = ComponentProps<typeof DialogFooter>

export const DialogContext = Dialog.Context
export type DialogContextProps = ComponentProps<typeof DialogContext>
