import { describe, expect, test } from "vitest"
import { clamp, formatTime, fractionAt } from "../src/video-player.utils"

describe("video player utilities", () => {
  test("formats time", () => {
    expect(formatTime(0)).toBe("0:00")
    expect(formatTime(65.7)).toBe("1:05")
    expect(formatTime(3725)).toBe("1:02:05")
    expect(formatTime(Number.NaN)).toBe("0:00")
  })

  test("clamps values", () => {
    expect(clamp(5, 0, 3)).toBe(3)
    expect(clamp(-1, 0, 3)).toBe(0)
    expect(clamp(2, 0, 3)).toBe(2)
  })

  test("finds the fraction under the pointer", () => {
    const rect = { left: 100, width: 200 }
    expect(fractionAt(rect, 200)).toBe(0.5)
    expect(fractionAt(rect, 50)).toBe(0)
    expect(fractionAt(rect, 400)).toBe(1)
    expect(fractionAt({ left: 0, width: 0 }, 10)).toBe(0)
  })
})
