import type { fileUpload } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useFileUploadStyles, provideFileUploadStyles] = createContext<() => ReturnType<typeof fileUpload>>()
