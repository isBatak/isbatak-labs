import { describe, expect, test } from "vitest"
import { findActiveCue, formatTime } from "../src/video-player.utils"

const cues = [
  { start: 0, end: 2, text: "a" },
  { start: 2, end: 5, text: "b" },
  { start: 8, end: 10, text: "c" },
]

describe("video player utilities", () => {
  test("finds the cue at a time", () => {
    expect(findActiveCue(cues, 0)).toBe(0)
    expect(findActiveCue(cues, 2)).toBe(1)
    expect(findActiveCue(cues, 4.9)).toBe(1)
    expect(findActiveCue(cues, 10)).toBe(-1)
  })

  test("returns -1 in gaps and without cues", () => {
    expect(findActiveCue(cues, 6)).toBe(-1)
    expect(findActiveCue([], 1)).toBe(-1)
  })

  test("formats time", () => {
    expect(formatTime(0)).toBe("0:00")
    expect(formatTime(65.7)).toBe("1:05")
    expect(formatTime(3725)).toBe("1:02:05")
    expect(formatTime(Number.NaN)).toBe("0:00")
  })
})
