import { createContext } from "@ark-ui/solid/utils"
import type { UseMasonryReturn } from "./use-masonry"

export interface UseMasonryContext extends UseMasonryReturn {}

export const [MasonryProvider, useMasonryContext] = createContext<UseMasonryContext>({
  hookName: "useMasonryContext",
  providerName: "<MasonryProvider />",
})
