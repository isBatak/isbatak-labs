import type { wheelPicker } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useWheelPickerStyles, provideWheelPickerStyles] = createContext<() => ReturnType<typeof wheelPicker>>()
