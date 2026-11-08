import { Drawer } from "@ark-ui/solid/drawer"
import { type ComponentProps, type JSX, mergeProps, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { drawer } from "@isbatak/panda-ds/recipes"

const { withProvider, withRootProvider, withContext } = createSlotRecipeContext(drawer)

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
  const placement = () => props.placement ?? (props.swipeDirection ? undefined : "end")
  const swipeDirection = () => {
    const value = placement()
    return typeof value === "string" ? swipeDirections[value] : undefined
  }
  return (
    <StyledDrawerRoot
      {...mergeProps(
        {
          get swipeDirection() {
            return swipeDirection()
          },
        },
        props,
      )}
      placement={placement()}
    />
  )
}

export const DrawerRootProvider = withRootProvider(Drawer.RootProvider, {
  defaultProps: { lazyMount: true, unmountOnExit: true },
})
export type DrawerRootProviderProps = ComponentProps<typeof DrawerRootProvider>

export const DrawerTrigger = withContext(Drawer.Trigger, "trigger")
export type DrawerTriggerProps = ComponentProps<typeof DrawerTrigger>

export const DrawerBackdrop = withContext(Drawer.Backdrop, "backdrop")
export type DrawerBackdropProps = ComponentProps<typeof DrawerBackdrop>

export const DrawerPositioner = withContext(Drawer.Positioner, "positioner")
export type DrawerPositionerProps = ComponentProps<typeof DrawerPositioner>

const StyledDrawerContent = withContext(Drawer.Content, "content")

export type DrawerContentProps = ComponentProps<typeof StyledDrawerContent>

export function DrawerContent(props: DrawerContentProps) {
  const [local, rest] = splitProps(props, ["onPointerDown"])
  return (
    <StyledDrawerContent
      {...rest}
      onPointerDown={(event) => {
        const handler = local.onPointerDown as JSX.EventHandler<HTMLDivElement, PointerEvent> | undefined
        handler?.(event)
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

export const DrawerIndent = withProvider(Drawer.Indent, "indent")
export type DrawerIndentProps = ComponentProps<typeof DrawerIndent>

export const DrawerIndentBackground = withProvider(Drawer.IndentBackground, "indentBackground")
export type DrawerIndentBackgroundProps = ComponentProps<typeof DrawerIndentBackground>

export const DrawerHeader = withContext("div", "header")
export type DrawerHeaderProps = ComponentProps<typeof DrawerHeader>

export const DrawerBody = withContext("div", "body")
export type DrawerBodyProps = ComponentProps<typeof DrawerBody>

export const DrawerFooter = withContext("div", "footer")
export type DrawerFooterProps = ComponentProps<typeof DrawerFooter>

export const DrawerContext = Drawer.Context
export type DrawerContextProps = ComponentProps<typeof DrawerContext>
