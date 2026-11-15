import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ImageCropperDemo from "@isbatak/compositions/ds/vue/image-cropper/usage"
import ImageCropperAspectRatioDemo from "@isbatak/compositions/ds/vue/image-cropper/aspect-ratio"
import ImageCropperCircleDemo from "@isbatak/compositions/ds/vue/image-cropper/circle"
import ImageCropperContextDemo from "@isbatak/compositions/ds/vue/image-cropper/context"
import ImageCropperControlledZoomDemo from "@isbatak/compositions/ds/vue/image-cropper/controlled-zoom"
import ImageCropperCropPreviewDemo from "@isbatak/compositions/ds/vue/image-cropper/crop-preview"
import ImageCropperEventsDemo from "@isbatak/compositions/ds/vue/image-cropper/events"
import ImageCropperFixedDemo from "@isbatak/compositions/ds/vue/image-cropper/fixed"
import ImageCropperFlipDemo from "@isbatak/compositions/ds/vue/image-cropper/flip"
import ImageCropperInitialCropDemo from "@isbatak/compositions/ds/vue/image-cropper/initial-crop"
import ImageCropperMinMaxSizeDemo from "@isbatak/compositions/ds/vue/image-cropper/min-max-size"
import ImageCropperResetDemo from "@isbatak/compositions/ds/vue/image-cropper/reset"
import ImageCropperRootProviderDemo from "@isbatak/compositions/ds/vue/image-cropper/root-provider"
import ImageCropperRotationDemo from "@isbatak/compositions/ds/vue/image-cropper/rotation"
import ImageCropperZoomLimitsDemo from "@isbatak/compositions/ds/vue/image-cropper/zoom-limits"
import ImageCropperSizesDemo from "@isbatak/compositions/ds/vue/image-cropper/sizes"
import ImageCropperVariantsDemo from "@isbatak/compositions/ds/vue/image-cropper/variants"

const meta = {
  title: "DS/Image cropper",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ImageCropperDemo) }),
}

export const AspectRatio: Story = {
  render: () => ({ setup: () => () => h(ImageCropperAspectRatioDemo) }),
}

export const Circle: Story = {
  render: () => ({ setup: () => () => h(ImageCropperCircleDemo) }),
}

export const Context: Story = {
  render: () => ({ setup: () => () => h(ImageCropperContextDemo) }),
}

export const ControlledZoom: Story = {
  render: () => ({ setup: () => () => h(ImageCropperControlledZoomDemo) }),
}

export const CropPreview: Story = {
  render: () => ({ setup: () => () => h(ImageCropperCropPreviewDemo) }),
}

export const Events: Story = {
  render: () => ({ setup: () => () => h(ImageCropperEventsDemo) }),
}

export const Fixed: Story = {
  render: () => ({ setup: () => () => h(ImageCropperFixedDemo) }),
}

export const Flip: Story = {
  render: () => ({ setup: () => () => h(ImageCropperFlipDemo) }),
}

export const InitialCrop: Story = {
  render: () => ({ setup: () => () => h(ImageCropperInitialCropDemo) }),
}

export const MinMaxSize: Story = {
  render: () => ({ setup: () => () => h(ImageCropperMinMaxSizeDemo) }),
}

export const Reset: Story = {
  render: () => ({ setup: () => () => h(ImageCropperResetDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(ImageCropperRootProviderDemo) }),
}

export const Rotation: Story = {
  render: () => ({ setup: () => () => h(ImageCropperRotationDemo) }),
}

export const ZoomLimits: Story = {
  render: () => ({ setup: () => () => h(ImageCropperZoomLimitsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ImageCropperSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ImageCropperVariantsDemo) }),
}
