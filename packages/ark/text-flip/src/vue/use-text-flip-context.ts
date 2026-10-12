import { createContext } from "@ark-ui/vue/utils"
import type { UseTextFlipReturn } from "./use-text-flip"

export interface UseTextFlipContext extends UseTextFlipReturn {}

export const [TextFlipProvider, useTextFlipContext] = createContext<UseTextFlipContext>("TextFlipContext")
