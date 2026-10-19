"use client"

import { Drawer } from "@ark-ui/react/drawer"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { drawer } from "@isbatak/panda-ds/recipes"

const { withRootProvider, withContext } = createSlotRecipeContext(drawer)

const StyledDrawerRoot = withRootProvider(Drawer.Root, {
  defaultProps: { lazyMount: true, unmountOnExit: true },
})

const swipeDirections = {
  start: "start",
  end: "end",
  top: "up",
  bottom: "down",
} as const

export type DrawerRootProps = ComponentProps<typeof StyledDrawerRoot>

export function DrawerRoot(props: DrawerRootProps) {
  const { placement = "end" } = props
  const swipeDirection = typeof placement === "string" ? swipeDirections[placement] : undefined
  return <StyledDrawerRoot swipeDirection={swipeDirection} {...props} placement={placement} />
}

export const DrawerTrigger = withContext(Drawer.Trigger, "trigger")
export type DrawerTriggerProps = ComponentProps<typeof DrawerTrigger>

export const DrawerBackdrop = withContext(Drawer.Backdrop, "backdrop")
export type DrawerBackdropProps = ComponentProps<typeof DrawerBackdrop>

export const DrawerPositioner = withContext(Drawer.Positioner, "positioner")
export type DrawerPositionerProps = ComponentProps<typeof DrawerPositioner>

const StyledDrawerContent = withContext(Drawer.Content, "content")

export type DrawerContentProps = ComponentProps<typeof StyledDrawerContent>

export function DrawerContent(props: DrawerContentProps) {
  return (
    <StyledDrawerContent
      {...props}
      onPointerDown={(event) => {
        props.onPointerDown?.(event)
        event.stopPropagation()
      }}
    />
  )
}

export const DrawerTitle = withContext(Drawer.Title, "title")
export type DrawerTitleProps = ComponentProps<typeof DrawerTitle>

export const DrawerDescription = withContext(Drawer.Description, "description")
export type DrawerDescriptionProps = ComponentProps<typeof DrawerDescription>

export const DrawerCloseTrigger = withContext(Drawer.CloseTrigger, "closeTrigger")
export type DrawerCloseTriggerProps = ComponentProps<typeof DrawerCloseTrigger>

export const DrawerActionTrigger = Drawer.CloseTrigger
export type DrawerActionTriggerProps = ComponentProps<typeof DrawerActionTrigger>

export const DrawerGrabber = withContext(Drawer.Grabber, "grabber")
export type DrawerGrabberProps = ComponentProps<typeof DrawerGrabber>

export const DrawerGrabberIndicator = withContext(Drawer.GrabberIndicator, "grabberIndicator")
export type DrawerGrabberIndicatorProps = ComponentProps<typeof DrawerGrabberIndicator>

export const DrawerSwipeArea = withContext(Drawer.SwipeArea, "swipeArea")
export type DrawerSwipeAreaProps = ComponentProps<typeof DrawerSwipeArea>

export const DrawerStack = Drawer.Stack
export type DrawerStackProps = ComponentProps<typeof DrawerStack>

export const DrawerIndent = withContext(Drawer.Indent, "indent")
export type DrawerIndentProps = ComponentProps<typeof DrawerIndent>

export const DrawerIndentBackground = withContext(Drawer.IndentBackground, "indentBackground")
export type DrawerIndentBackgroundProps = ComponentProps<typeof DrawerIndentBackground>

export const DrawerHeader = withContext("div", "header")
export type DrawerHeaderProps = ComponentProps<typeof DrawerHeader>

export const DrawerBody = withContext("div", "body")
export type DrawerBodyProps = ComponentProps<typeof DrawerBody>

export const DrawerFooter = withContext("div", "footer")
export type DrawerFooterProps = ComponentProps<typeof DrawerFooter>

export const DrawerContext = Drawer.Context
export type DrawerContextProps = Drawer.ContextProps
