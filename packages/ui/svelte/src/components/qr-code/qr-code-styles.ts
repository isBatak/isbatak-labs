import type { qrCode } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useQrCodeStyles, provideQrCodeStyles] = createContext<() => ReturnType<typeof qrCode>>()
