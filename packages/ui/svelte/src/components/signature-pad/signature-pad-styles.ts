import type { signaturePad } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSignaturePadStyles, provideSignaturePadStyles] = createContext<() => ReturnType<typeof signaturePad>>()
