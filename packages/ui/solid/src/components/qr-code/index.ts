export {
  QrCodeRoot,
  QrCodeRootProvider,
  QrCodeFrame,
  QrCodePattern,
  QrCodeOverlay,
  QrCodeDownloadTrigger,
  QrCodeContext,
} from "./qr-code"

export type {
  QrCodeRootProps,
  QrCodeRootProviderProps,
  QrCodeFrameProps,
  QrCodePatternProps,
  QrCodeOverlayProps,
  QrCodeDownloadTriggerProps,
  QrCodeContextProps,
} from "./qr-code"

export { useQrCode, useQrCodeContext } from "@ark-ui/solid/qr-code"
export type {
  QrCodeGenerateOptions,
  QrCodeGenerateResult,
  QrCodeValueChangeDetails,
  UseQrCodeProps,
  UseQrCodeReturn,
} from "@ark-ui/solid/qr-code"

export * as QrCode from "./namespace"
