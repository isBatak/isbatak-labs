import { createContext } from "@ark-ui/react/utils"
import type { UseCodePreviewReturn } from "./use-code-preview"

export interface UseCodePreviewContext extends UseCodePreviewReturn {}

export const [CodePreviewProvider, useCodePreviewContext] = createContext<UseCodePreviewContext>({
  name: "CodePreviewContext",
  hookName: "useCodePreviewContext",
  providerName: "<CodePreviewProvider />",
})
