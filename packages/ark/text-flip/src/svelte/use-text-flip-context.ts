import { createContext } from "@ark-ui/svelte"
import type { UseTextFlipReturn } from "./use-text-flip.svelte.js"

export interface UseTextFlipContext extends UseTextFlipReturn {}

export const [TextFlipProvider, useTextFlipContext] = createContext<UseTextFlipContext>({
  name: "TextFlipContext",
})
