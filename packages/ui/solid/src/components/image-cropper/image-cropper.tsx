import { ImageCropper } from "@ark-ui/solid/image-cropper"
import { Show, splitProps, type ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export function ImageCropperHandle(props: ImageCropperHandleProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledImageCropperHandle {...rest}>
      <Show when={local.children} fallback={<div />}>
        {local.children}
      </Show>
    </StyledImageCropperHandle>
  )
}

export const ImageCropperGrid = withContext(ImageCropper.Grid, "grid")
export type ImageCropperGridProps = ComponentProps<typeof ImageCropperGrid>

const StyledImageCropperSelection = withContext(ImageCropper.Selection, "selection")
export type ImageCropperSelectionProps = ComponentProps<typeof StyledImageCropperSelection>

export function ImageCropperSelection(props: ImageCropperSelectionProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledImageCropperSelection {...rest}>
      <Show
        when={local.children}
        fallback={
          <>
            <ImageCropperHandle placement="nw" />
            <ImageCropperHandle placement="n" />
            <ImageCropperHandle placement="ne" />
            <ImageCropperHandle placement="e" />
            <ImageCropperHandle placement="se" />
            <ImageCropperHandle placement="s" />
            <ImageCropperHandle placement="sw" />
            <ImageCropperHandle placement="w" />
            <ImageCropperGrid axis="horizontal" />
            <ImageCropperGrid axis="vertical" />
          </>
        }
      >
        {local.children}
      </Show>
    </StyledImageCropperSelection>
  )
}

export const ImageCropperContext = ImageCropper.Context
export type ImageCropperContextProps = ImageCropper.ContextProps
