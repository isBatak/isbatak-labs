import { QrCode } from "@ark-ui/svelte/qr-code"

export { default as QrCodeRoot, type QrCodeRootProps } from "./qr-code-root.svelte"
export { default as QrCodeRootProvider, type QrCodeRootProviderProps } from "./qr-code-root-provider.svelte"
export { default as QrCodeFrame, type QrCodeFrameProps } from "./qr-code-frame.svelte"
export { default as QrCodePattern, type QrCodePatternProps } from "./qr-code-pattern.svelte"
export { default as QrCodeOverlay, type QrCodeOverlayProps } from "./qr-code-overlay.svelte"
export { default as QrCodeDownloadTrigger, type QrCodeDownloadTriggerProps } from "./qr-code-download-trigger.svelte"
export const QrCodeContext = QrCode.Context
export type QrCodeContextProps = QrCode.ContextProps
