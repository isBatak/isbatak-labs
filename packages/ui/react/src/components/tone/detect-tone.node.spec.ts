import { describe, it, expect } from "vitest"

import { detectTone } from "./detect-tone"

describe("detectTone", () => {
  it('returns "neutral" when value is 0', () => {
    expect(detectTone(0)).toBe("neutral")
  })

  it('returns "positive" when value is positive', () => {
    expect(detectTone(1)).toBe("positive")
    expect(detectTone(0.01)).toBe("positive")
    expect(detectTone(100)).toBe("positive")
    expect(detectTone(1000.5)).toBe("positive")
  })

  it('returns "negative" when value is negative', () => {
    expect(detectTone(-1)).toBe("negative")
    expect(detectTone(-0.01)).toBe("negative")
    expect(detectTone(-100)).toBe("negative")
    expect(detectTone(-1000.5)).toBe("negative")
  })

  it("handles very small positive numbers", () => {
    expect(detectTone(Number.MIN_VALUE)).toBe("positive")
    expect(detectTone(0.000001)).toBe("positive")
  })

  it("handles very small negative numbers", () => {
    expect(detectTone(-Number.MIN_VALUE)).toBe("negative")
    expect(detectTone(-0.000001)).toBe("negative")
  })

  it("handles very large positive numbers", () => {
    expect(detectTone(Number.MAX_VALUE)).toBe("positive")
    expect(detectTone(1e308)).toBe("positive")
  })

  it("handles very large negative numbers", () => {
    expect(detectTone(-Number.MAX_VALUE)).toBe("negative")
    expect(detectTone(-1e308)).toBe("negative")
  })

  it("handles negative zero", () => {
    expect(detectTone(-0)).toBe("neutral")
  })

  it('returns "neutral" when value is undefined', () => {
    expect(detectTone(undefined)).toBe("neutral")
    expect(detectTone()).toBe("neutral")
  })

  it("handles numeric strings", () => {
    expect(detectTone("12.5")).toBe("positive")
    expect(detectTone("-0.0001")).toBe("negative")
    expect(detectTone("0.000")).toBe("neutral")
  })

  it('returns "neutral" for non-numeric strings', () => {
    expect(detectTone("")).toBe("neutral")
    expect(detectTone("abc")).toBe("neutral")
  })
})
