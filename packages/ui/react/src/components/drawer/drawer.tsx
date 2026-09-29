"use client"

import { Drawer } from "@ark-ui/react/drawer"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { drawer } from "@isbatak/panda-ds/recipes"

const { withRootProvider, withContext } = createSlotRecipeContext(drawer)

export const DrawerRoot = withRootProvider(Drawer.Root)
export type DrawerRootProps = ComponentProps<typeof DrawerRoot>

export const DrawerTrigger = withContext(Drawer.Trigger, "trigger")
export type DrawerTriggerProps = ComponentProps<typeof DrawerTrigger>

export const DrawerBackdrop = withContext(Drawer.Backdrop, "backdrop")
export type DrawerBackdropProps = ComponentProps<typeof DrawerBackdrop>

export const DrawerPositioner = withContext(Drawer.Positioner, "positioner")
export type DrawerPositionerProps = ComponentProps<typeof DrawerPositioner>

export const DrawerContent = withContext(Drawer.Content, "content")
export type DrawerContentProps = ComponentProps<typeof DrawerContent>

export const DrawerTitle = withContext(Drawer.Title, "title")
export type DrawerTitleProps = ComponentProps<typeof DrawerTitle>

export const DrawerDescription = withContext(Drawer.Description, "description")
export type DrawerDescriptionProps = ComponentProps<typeof DrawerDescription>

export const DrawerCloseTrigger = withContext(Drawer.CloseTrigger, "closeTrigger")
export type DrawerCloseTriggerProps = ComponentProps<typeof DrawerCloseTrigger>

export const DrawerGrabber = withContext(Drawer.Grabber, "grabber")
export type DrawerGrabberProps = ComponentProps<typeof DrawerGrabber>

export const DrawerGrabberIndicator = withContext(Drawer.GrabberIndicator, "grabberIndicator")
export type DrawerGrabberIndicatorProps = ComponentProps<typeof DrawerGrabberIndicator>

export const DrawerHeader = withContext("div", "header")
export type DrawerHeaderProps = ComponentProps<typeof DrawerHeader>

export const DrawerBody = withContext("div", "body")
export type DrawerBodyProps = ComponentProps<typeof DrawerBody>

export const DrawerFooter = withContext("div", "footer")
export type DrawerFooterProps = ComponentProps<typeof DrawerFooter>

export const DrawerContext = Drawer.Context
export type DrawerContextProps = Drawer.ContextProps
