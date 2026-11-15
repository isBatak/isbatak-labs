import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ImageCropperDemo } from "@isbatak/compositions/ds/solid/image-cropper/usage"
import { ImageCropperAspectRatioDemo } from "@isbatak/compositions/ds/solid/image-cropper/aspect-ratio"
import { ImageCropperCircleDemo } from "@isbatak/compositions/ds/solid/image-cropper/circle"
import { ImageCropperContextDemo } from "@isbatak/compositions/ds/solid/image-cropper/context"
import { ImageCropperControlledZoomDemo } from "@isbatak/compositions/ds/solid/image-cropper/controlled-zoom"
import { ImageCropperCropPreviewDemo } from "@isbatak/compositions/ds/solid/image-cropper/crop-preview"
import { ImageCropperEventsDemo } from "@isbatak/compositions/ds/solid/image-cropper/events"
import { ImageCropperFixedDemo } from "@isbatak/compositions/ds/solid/image-cropper/fixed"
import { ImageCropperFlipDemo } from "@isbatak/compositions/ds/solid/image-cropper/flip"
import { ImageCropperInitialCropDemo } from "@isbatak/compositions/ds/solid/image-cropper/initial-crop"
import { ImageCropperMinMaxSizeDemo } from "@isbatak/compositions/ds/solid/image-cropper/min-max-size"
import { ImageCropperResetDemo } from "@isbatak/compositions/ds/solid/image-cropper/reset"
import { ImageCropperRootProviderDemo } from "@isbatak/compositions/ds/solid/image-cropper/root-provider"
import { ImageCropperRotationDemo } from "@isbatak/compositions/ds/solid/image-cropper/rotation"
import { ImageCropperZoomLimitsDemo } from "@isbatak/compositions/ds/solid/image-cropper/zoom-limits"
import { ImageCropperSizesDemo } from "@isbatak/compositions/ds/solid/image-cropper/sizes"
import { ImageCropperVariantsDemo } from "@isbatak/compositions/ds/solid/image-cropper/variants"

const meta = {
  title: "DS/Image cropper",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ImageCropperDemo />,
}

export const AspectRatio: Story = {
  render: () => <ImageCropperAspectRatioDemo />,
}

export const Circle: Story = {
  render: () => <ImageCropperCircleDemo />,
}

export const Context: Story = {
  render: () => <ImageCropperContextDemo />,
}

export const ControlledZoom: Story = {
  render: () => <ImageCropperControlledZoomDemo />,
}

export const CropPreview: Story = {
  render: () => <ImageCropperCropPreviewDemo />,
}

export const Events: Story = {
  render: () => <ImageCropperEventsDemo />,
}

export const Fixed: Story = {
  render: () => <ImageCropperFixedDemo />,
}

export const Flip: Story = {
  render: () => <ImageCropperFlipDemo />,
}

export const InitialCrop: Story = {
  render: () => <ImageCropperInitialCropDemo />,
}

export const MinMaxSize: Story = {
  render: () => <ImageCropperMinMaxSizeDemo />,
}

export const Reset: Story = {
  render: () => <ImageCropperResetDemo />,
}

export const RootProvider: Story = {
  render: () => <ImageCropperRootProviderDemo />,
}

export const Rotation: Story = {
  render: () => <ImageCropperRotationDemo />,
}

export const ZoomLimits: Story = {
  render: () => <ImageCropperZoomLimitsDemo />,
}

export const Sizes: Story = {
  render: () => <ImageCropperSizesDemo />,
}

export const Variants: Story = {
  render: () => <ImageCropperVariantsDemo />,
}
