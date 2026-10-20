import { createContext } from "@ark-ui/vue/utils"
import type { UseCodePreviewReturn } from "./use-code-preview"

export interface UseCodePreviewContext extends UseCodePreviewReturn {}

export const [CodePreviewProvider, useCodePreviewContext] = createContext<UseCodePreviewContext>("CodePreviewContext")
