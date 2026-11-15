"use client"

import { ImageCropper } from "@ark-ui/react/image-cropper"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
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

export function ImageCropperHandle({ children, ...props }: ImageCropperHandleProps) {
  return <StyledImageCropperHandle {...props}>{children ?? <div />}</StyledImageCropperHandle>
}

export const ImageCropperGrid = withContext(ImageCropper.Grid, "grid")
export type ImageCropperGridProps = ComponentProps<typeof ImageCropperGrid>

const StyledImageCropperSelection = withContext(ImageCropper.Selection, "selection")
export type ImageCropperSelectionProps = ComponentProps<typeof StyledImageCropperSelection>

export function ImageCropperSelection({ children, ...props }: ImageCropperSelectionProps) {
  return (
    <StyledImageCropperSelection {...props}>
      {children ?? (
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
      )}
    </StyledImageCropperSelection>
  )
}

export const ImageCropperContext = ImageCropper.Context
export type ImageCropperContextProps = ImageCropper.ContextProps
