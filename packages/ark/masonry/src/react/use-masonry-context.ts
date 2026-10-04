import { createContext } from "@ark-ui/react/utils"
import type { UseMasonryReturn } from "./use-masonry"

export interface UseMasonryContext extends UseMasonryReturn {}

export const [MasonryProvider, useMasonryContext] = createContext<UseMasonryContext>({
  name: "MasonryContext",
  hookName: "useMasonryContext",
  providerName: "<MasonryProvider />",
})
