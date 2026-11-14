import type { BeaconVariantProps } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useBeaconProps, provideBeaconProps, hasBeaconProps] = createContext<() => BeaconVariantProps>()
