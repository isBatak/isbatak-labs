import { createContext } from "@ark-ui/solid/utils"
import type { UseCodePreviewReturn } from "./use-code-preview"

export interface UseCodePreviewContext extends UseCodePreviewReturn {}

export const [CodePreviewProvider, useCodePreviewContext] = createContext<UseCodePreviewContext>({
  hookName: "useCodePreviewContext",
  providerName: "<CodePreviewProvider />",
})
