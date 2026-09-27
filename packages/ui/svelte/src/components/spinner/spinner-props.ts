import type { SpinnerVariantProps } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSpinnerProps, provideSpinnerProps, hasSpinnerProps] = createContext<() => SpinnerVariantProps>()
