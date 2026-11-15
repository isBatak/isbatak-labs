export type ToneType = "positive" | "negative" | "neutral"

export function detectTone(value: number | string | undefined = 0): ToneType {
  const numericValue = Number(value)
  if (Number.isNaN(numericValue) || numericValue === 0) return "neutral"
  return numericValue > 0 ? "positive" : "negative"
}
