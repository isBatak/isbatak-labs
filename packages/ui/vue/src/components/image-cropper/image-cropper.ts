import { ImageCropper, type ImageCropperContextProps as ArkImageCropperContextProps } from "@ark-ui/vue/image-cropper"
import { defineComponent, h, type Component } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { imageCropper } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(imageCropper)

export const ImageCropperRoot = withProvider(ImageCropper.Root, "root", {
  forwardProps: ["aspectRatio", "zoom", "minWidth", "minHeight", "maxWidth", "maxHeight"],
})
export type ImageCropperRootProps = ComponentProps<typeof ImageCropperRoot>

export const ImageCropperRootProvider = withProvider(ImageCropper.RootProvider, "root")
export type ImageCropperRootProviderProps = ComponentProps<typeof ImageCropperRootProvider>

export const ImageCropperViewport = withContext(ImageCropper.Viewport, "viewport")
export type ImageCropperViewportProps = ComponentProps<typeof ImageCropperViewport>

export const ImageCropperImage = withContext(ImageCropper.Image, "image")
export type ImageCropperImageProps = ComponentProps<typeof ImageCropperImage>

const StyledImageCropperHandle = withContext(ImageCropper.Handle, "handle")
export type ImageCropperHandleProps = ComponentProps<typeof StyledImageCropperHandle>

export const ImageCropperHandle = defineComponent({
  name: "ImageCropperHandle",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(StyledImageCropperHandle as Component, attrs, slots.default ?? (() => h("div")))
  },
}) as unknown as typeof StyledImageCropperHandle

export const ImageCropperGrid = withContext(ImageCropper.Grid, "grid")
export type ImageCropperGridProps = ComponentProps<typeof ImageCropperGrid>

const StyledImageCropperSelection = withContext(ImageCropper.Selection, "selection")
export type ImageCropperSelectionProps = ComponentProps<typeof StyledImageCropperSelection>

export const ImageCropperSelection = defineComponent({
  name: "ImageCropperSelection",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledImageCropperSelection as Component,
        attrs,
        slots.default ??
          (() => [
            h(ImageCropperHandle as Component, { placement: "nw" }),
            h(ImageCropperHandle as Component, { placement: "n" }),
            h(ImageCropperHandle as Component, { placement: "ne" }),
            h(ImageCropperHandle as Component, { placement: "e" }),
            h(ImageCropperHandle as Component, { placement: "se" }),
            h(ImageCropperHandle as Component, { placement: "s" }),
            h(ImageCropperHandle as Component, { placement: "sw" }),
            h(ImageCropperHandle as Component, { placement: "w" }),
            h(ImageCropperGrid as Component, { axis: "horizontal" }),
            h(ImageCropperGrid as Component, { axis: "vertical" }),
          ]),
      )
  },
}) as unknown as typeof StyledImageCropperSelection

export const ImageCropperContext = ImageCropper.Context
export type ImageCropperContextProps = ArkImageCropperContextProps
