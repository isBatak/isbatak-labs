import { createContext } from "@ark-ui/react/utils"
import type { UseTextFlipReturn } from "./use-text-flip"

export interface UseTextFlipContext extends UseTextFlipReturn {}

export const [TextFlipProvider, useTextFlipContext] = createContext<UseTextFlipContext>({
  name: "TextFlipContext",
  hookName: "useTextFlipContext",
  providerName: "<TextFlipProvider />",
})
