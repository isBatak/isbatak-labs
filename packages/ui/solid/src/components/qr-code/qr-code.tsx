import { QrCode } from "@ark-ui/solid/qr-code"
import { type ComponentProps, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export function QrCodeFrame(props: QrCodeFrameProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledQrCodeFrame {...rest}>{local.children ?? <QrCodePattern />}</StyledQrCodeFrame>
}

export const QrCodeOverlay = withContext(QrCode.Overlay, "overlay")
export type QrCodeOverlayProps = ComponentProps<typeof QrCodeOverlay>

export const QrCodeDownloadTrigger = withContext(QrCode.DownloadTrigger, "downloadTrigger")
export type QrCodeDownloadTriggerProps = ComponentProps<typeof QrCodeDownloadTrigger>

export const QrCodeContext = QrCode.Context
export type QrCodeContextProps = QrCode.ContextProps
