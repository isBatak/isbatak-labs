import { QrCode } from "@ark-ui/vue/qr-code"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { qrCode } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(qrCode)

export const QrCodeRoot = withProvider(QrCode.Root, "root")
export type QrCodeRootProps = ComponentProps<typeof QrCodeRoot>

export const QrCodeRootProvider = withProvider(QrCode.RootProvider, "root")
export type QrCodeRootProviderProps = ComponentProps<typeof QrCodeRootProvider>

export const QrCodePattern = withContext(QrCode.Pattern, "pattern")
export type QrCodePatternProps = ComponentProps<typeof QrCodePattern>

const StyledQrCodeFrame = withContext(QrCode.Frame, "frame")
export type QrCodeFrameProps = ComponentProps<typeof StyledQrCodeFrame>

export const QrCodeFrame = defineComponent({
  name: "QrCodeFrame",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(StyledQrCodeFrame as Component, attrs, () => slots.default?.() ?? h(QrCodePattern as Component))
  },
}) as unknown as typeof StyledQrCodeFrame

export const QrCodeOverlay = withContext(QrCode.Overlay, "overlay")
export type QrCodeOverlayProps = ComponentProps<typeof QrCodeOverlay>

export const QrCodeDownloadTrigger = withContext(QrCode.DownloadTrigger, "downloadTrigger")
export type QrCodeDownloadTriggerProps = ComponentProps<typeof QrCodeDownloadTrigger>

export const QrCodeContext = QrCode.Context
export type QrCodeContextProps = QrCode.ContextProps
