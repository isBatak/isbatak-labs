import { SITE_URL } from "./site-url"
import type { DocVariant } from "./variant"

interface RegistryItem extends DocVariant {
  id: string
}

export const registryName = ({ id, framework, styling, api }: RegistryItem) =>
  [id, framework, styling === "panda" && styling, api === "ark" && api].filter(Boolean).join("-")

export const registryUrl = (item: RegistryItem) => `${SITE_URL}/r/${registryName(item)}.json`
