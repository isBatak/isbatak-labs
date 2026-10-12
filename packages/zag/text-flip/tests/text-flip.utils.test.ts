import { describe, expect, test } from "vitest"
import { getItemState, wrapIndex } from "../src/text-flip.utils"

describe("text flip utilities", () => {
  test("wraps the index in both directions", () => {
    expect(wrapIndex(3, 3)).toBe(0)
    expect(wrapIndex(4, 3)).toBe(1)
    expect(wrapIndex(-1, 3)).toBe(2)
  })

  test("shows the first item without animating it in", () => {
    expect(getItemState(0, 0, -1)).toBe("visible")
    expect(getItemState(1, 0, -1)).toBe("hidden")
  })

  test("flips the previous item out and the current one in", () => {
    expect(getItemState(1, 1, 0)).toBe("entering")
    expect(getItemState(0, 1, 0)).toBe("exiting")
    expect(getItemState(2, 1, 0)).toBe("hidden")
  })
})
