import type { nativeSelect } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useNativeSelectStyles, provideNativeSelectStyles] = createContext<() => ReturnType<typeof nativeSelect>>()
