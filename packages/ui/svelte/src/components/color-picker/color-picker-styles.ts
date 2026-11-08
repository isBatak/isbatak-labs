import type { colorPicker } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useColorPickerStyles, provideColorPickerStyles] = createContext<() => ReturnType<typeof colorPicker>>()
