import { createContext } from "@ark-ui/svelte"
import type { UseMasonryReturn } from "./use-masonry.svelte.js"

export interface UseMasonryContext extends UseMasonryReturn {}

export const [MasonryProvider, useMasonryContext] = createContext<UseMasonryContext>({
  name: "MasonryContext",
})
