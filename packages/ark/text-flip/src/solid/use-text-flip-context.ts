import { createContext } from "@ark-ui/solid/utils"
import type { UseTextFlipReturn } from "./use-text-flip"

export interface UseTextFlipContext extends UseTextFlipReturn {}

export const [TextFlipProvider, useTextFlipContext] = createContext<UseTextFlipContext>({
  hookName: "useTextFlipContext",
  providerName: "<TextFlipProvider />",
})
