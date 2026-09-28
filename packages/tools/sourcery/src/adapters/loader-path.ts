import { createRequire } from "node:module"

export const LOADER_PATH = createRequire(import.meta.url).resolve("@isbatak/sourcery/loader")
