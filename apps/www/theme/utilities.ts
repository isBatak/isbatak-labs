import { concentricUtilities } from "@isbatak/panda-concentric"
import type { PropertyConfig, UtilityConfig } from "@pandacss/types"

const isRound = (value: unknown, raw: unknown) => raw === "full" || /%|9999|radii-full|infinity/.test(String(value))

const withSquircle = (config: PropertyConfig): PropertyConfig => ({
  ...config,
  transform: (value, args) => {
    const styles = config.transform?.(value, args) ?? {}
    if (value === "inherit") return { ...styles, cornerShape: "inherit" }
    return isRound(value, args.raw) ? styles : { ...styles, cornerShape: "squircle" }
  },
})

export const utilities: UtilityConfig = Object.fromEntries(
  Object.entries(concentricUtilities)
    .filter(([property]) => property.endsWith("Radius"))
    .map(([property, config]) => [property, withSquircle(config!)]),
)
