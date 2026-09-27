import type { segmentGroup } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSegmentGroupStyles, provideSegmentGroupStyles] = createContext<() => ReturnType<typeof segmentGroup>>()
