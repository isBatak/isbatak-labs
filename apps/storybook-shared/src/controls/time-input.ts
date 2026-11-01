export const locales = ["en-US", "en-GB", "fr-FR", "de-DE", "cs-CZ", "ja-JP", "mk-MK", "zh-CN"] as const

export type Locale = (typeof locales)[number]

export interface TimeInputControls {
  locale: Locale
}

export const timeInputArgs: TimeInputControls = { locale: "en-US" }

export const timeInputArgTypes = {
  locale: { control: "select", options: locales },
} as const
