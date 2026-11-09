import { Drawer } from "@ark-ui/vue/drawer"
import { type Component, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { drawer } from "@isbatak/panda-ds/recipes"
import { CloseButton } from "../button"

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

export const DrawerRoot = defineComponent({
  name: "DrawerRoot",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const placement = computed(() => (attrs.placement ?? (attrs.swipeDirection ? undefined : "end")) as unknown)
    const swipeDirection = computed(() =>
      typeof placement.value === "string"
        ? swipeDirections[placement.value as keyof typeof swipeDirections]
        : undefined,
    )
    return () =>
      h(
        StyledDrawerRoot as Component,
        { swipeDirection: swipeDirection.value, ...attrs, placement: placement.value },
        slots,
      )
  },
}) as unknown as typeof StyledDrawerRoot

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

export const DrawerContent = defineComponent({
  name: "DrawerContent",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledDrawerContent as Component,
        {
          ...attrs,
          onPointerdown: (event: PointerEvent) => {
            ;(attrs.onPointerdown as ((event: PointerEvent) => void) | undefined)?.(event)
            event.stopPropagation()
          },
        },
        slots,
      )
  },
}) as unknown as typeof StyledDrawerContent

export const DrawerTitle = withContext(Drawer.Title, "title")
export type DrawerTitleProps = ComponentProps<typeof DrawerTitle>

export const DrawerDescription = withContext(Drawer.Description, "description")
export type DrawerDescriptionProps = ComponentProps<typeof DrawerDescription>

const StyledDrawerCloseTrigger = withContext(Drawer.CloseTrigger, "closeTrigger")
export type DrawerCloseTriggerProps = ComponentProps<typeof StyledDrawerCloseTrigger>

export const DrawerCloseTrigger = defineComponent({
  name: "DrawerCloseTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      slots.default
        ? h(StyledDrawerCloseTrigger as Component, attrs, slots)
        : h(StyledDrawerCloseTrigger as Component, { asChild: true, ...attrs }, () => h(CloseButton, { size: "sm" }))
  },
}) as unknown as typeof StyledDrawerCloseTrigger

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
