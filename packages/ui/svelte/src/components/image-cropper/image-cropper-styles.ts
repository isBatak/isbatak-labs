import type { imageCropper } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useImageCropperStyles, provideImageCropperStyles] = createContext<() => ReturnType<typeof imageCropper>>()
