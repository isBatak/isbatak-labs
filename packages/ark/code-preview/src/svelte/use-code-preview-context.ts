import { createContext } from "@ark-ui/svelte"
import type { UseCodePreviewReturn } from "./use-code-preview.svelte.js"

export interface UseCodePreviewContext extends UseCodePreviewReturn {}

export const [CodePreviewProvider, useCodePreviewContext] = createContext<UseCodePreviewContext>({
  name: "CodePreviewContext",
})
