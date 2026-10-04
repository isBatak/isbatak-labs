import { createContext } from "@ark-ui/vue/utils"
import type { UseMasonryReturn } from "./use-masonry"

export interface UseMasonryContext extends UseMasonryReturn {}

export const [MasonryProvider, useMasonryContext] = createContext<UseMasonryContext>("MasonryContext")
