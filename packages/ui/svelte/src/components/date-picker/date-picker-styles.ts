import type { datePicker } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useDatePickerStyles, provideDatePickerStyles] = createContext<() => ReturnType<typeof datePicker>>()
