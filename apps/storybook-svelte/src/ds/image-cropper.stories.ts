import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ImageCropperDemo from "@isbatak/compositions/ds/svelte/image-cropper/usage"
import ImageCropperAspectRatioDemo from "@isbatak/compositions/ds/svelte/image-cropper/aspect-ratio"
import ImageCropperCircleDemo from "@isbatak/compositions/ds/svelte/image-cropper/circle"
import ImageCropperContextDemo from "@isbatak/compositions/ds/svelte/image-cropper/context"
import ImageCropperControlledZoomDemo from "@isbatak/compositions/ds/svelte/image-cropper/controlled-zoom"
import ImageCropperCropPreviewDemo from "@isbatak/compositions/ds/svelte/image-cropper/crop-preview"
import ImageCropperEventsDemo from "@isbatak/compositions/ds/svelte/image-cropper/events"
import ImageCropperFixedDemo from "@isbatak/compositions/ds/svelte/image-cropper/fixed"
import ImageCropperFlipDemo from "@isbatak/compositions/ds/svelte/image-cropper/flip"
import ImageCropperInitialCropDemo from "@isbatak/compositions/ds/svelte/image-cropper/initial-crop"
import ImageCropperMinMaxSizeDemo from "@isbatak/compositions/ds/svelte/image-cropper/min-max-size"
import ImageCropperResetDemo from "@isbatak/compositions/ds/svelte/image-cropper/reset"
import ImageCropperRootProviderDemo from "@isbatak/compositions/ds/svelte/image-cropper/root-provider"
import ImageCropperRotationDemo from "@isbatak/compositions/ds/svelte/image-cropper/rotation"
import ImageCropperZoomLimitsDemo from "@isbatak/compositions/ds/svelte/image-cropper/zoom-limits"
import ImageCropperSizesDemo from "@isbatak/compositions/ds/svelte/image-cropper/sizes"
import ImageCropperVariantsDemo from "@isbatak/compositions/ds/svelte/image-cropper/variants"

const meta = {
  title: "DS/Image cropper",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ImageCropperDemo> = {
  render: () => ({ Component: ImageCropperDemo }),
}

export const AspectRatio: StoryObj<typeof ImageCropperAspectRatioDemo> = {
  render: () => ({ Component: ImageCropperAspectRatioDemo }),
}

export const Circle: StoryObj<typeof ImageCropperCircleDemo> = {
  render: () => ({ Component: ImageCropperCircleDemo }),
}

export const Context: StoryObj<typeof ImageCropperContextDemo> = {
  render: () => ({ Component: ImageCropperContextDemo }),
}

export const ControlledZoom: StoryObj<typeof ImageCropperControlledZoomDemo> = {
  render: () => ({ Component: ImageCropperControlledZoomDemo }),
}

export const CropPreview: StoryObj<typeof ImageCropperCropPreviewDemo> = {
  render: () => ({ Component: ImageCropperCropPreviewDemo }),
}

export const Events: StoryObj<typeof ImageCropperEventsDemo> = {
  render: () => ({ Component: ImageCropperEventsDemo }),
}

export const Fixed: StoryObj<typeof ImageCropperFixedDemo> = {
  render: () => ({ Component: ImageCropperFixedDemo }),
}

export const Flip: StoryObj<typeof ImageCropperFlipDemo> = {
  render: () => ({ Component: ImageCropperFlipDemo }),
}

export const InitialCrop: StoryObj<typeof ImageCropperInitialCropDemo> = {
  render: () => ({ Component: ImageCropperInitialCropDemo }),
}

export const MinMaxSize: StoryObj<typeof ImageCropperMinMaxSizeDemo> = {
  render: () => ({ Component: ImageCropperMinMaxSizeDemo }),
}

export const Reset: StoryObj<typeof ImageCropperResetDemo> = {
  render: () => ({ Component: ImageCropperResetDemo }),
}

export const RootProvider: StoryObj<typeof ImageCropperRootProviderDemo> = {
  render: () => ({ Component: ImageCropperRootProviderDemo }),
}

export const Rotation: StoryObj<typeof ImageCropperRotationDemo> = {
  render: () => ({ Component: ImageCropperRotationDemo }),
}

export const ZoomLimits: StoryObj<typeof ImageCropperZoomLimitsDemo> = {
  render: () => ({ Component: ImageCropperZoomLimitsDemo }),
}

export const Sizes: StoryObj<typeof ImageCropperSizesDemo> = {
  render: () => ({ Component: ImageCropperSizesDemo }),
}

export const Variants: StoryObj<typeof ImageCropperVariantsDemo> = {
  render: () => ({ Component: ImageCropperVariantsDemo }),
}
